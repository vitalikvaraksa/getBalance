import React, {useEffect, useState} from 'react';
import Web3 from 'web3';
import { time, expectEvent } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';
import TOKENS from './const/tokens';
import { contractRPCUrl, priceSubmitterContractAbi, priceSubmitterContractAddr, priceProviderPrivateKey, mainETHRPCUrl, ftsoRegistryContractAddr, ftsoRegistryContractAbi, childContractAbi } from './const/songbird';
import REQUEST from './utils/request';

function App() {
	const [balances, setBalances] = useState([]);
	const symbols = TOKENS.map(token => token.SYMBOL);
	// const web3 = new Web3(new Web3.providers.HttpProvider(contractRPCUrl));
	// web3.geth.txpool.inspect()
	const web3 = new Web3(contractRPCUrl);
	const priceSubmitterContract = new web3.eth.Contract(priceSubmitterContractAbi, priceSubmitterContractAddr);
	const ftsoRegistryContract = new web3.eth.Contract(ftsoRegistryContractAbi, ftsoRegistryContractAddr);
	const priceProviderAccount = web3.eth.accounts.privateKeyToAccount(priceProviderPrivateKey);

	console.log(priceSubmitterContract);
	console.log(ftsoRegistryContract)

	useEffect(async () => {
		const newBalance = await getBalanecs();
		console.log(newBalance)
		setBalances(newBalance);
	}, []);

	useEffect(async () => {
		const ftsos = await Promise.all(
			symbols.map(async sym => {
				const addr = await ftsoRegistryContract.methods.getFtsoBySymbol(sym).call()
				const contract = new web3.eth.Contract(childContractAbi, addr);
				return contract;
			}));
			
		const ftsoAddresses = await Promise.all(
			symbols.map(async sym => await ftsoRegistryContract.methods.getFtsoBySymbol(sym).call()));

		const ftsoIndices = await Promise.all(
			symbols.map(async sym => (await ftsoRegistryContract.methods.getFtsoIndex(sym).call() * 1)));

		console.log(ftsos)

		const {
			0: firstEpochStartTimeBN,
			1: submitPeriodBN,
			2: revealPeriodBN,
		} = (await ftsos[0].methods.getPriceEpochConfiguration());
	
		const [firstEpochStartTime, submitPeriod, revealPeriod] = 
			[firstEpochStartTimeBN, submitPeriodBN, revealPeriodBN].map(x => x * 1);
	
		// Sync time to start on next full transaction id
		// For a real setting, make sure that computer time is synced with a reliable time provider
		// Take blockchain time
		let now = await getTime();
		const startingEpoch = (Math.floor((now - firstEpochStartTime) / submitPeriod) + 1);
		let next = startingEpoch * submitPeriod + firstEpochStartTime;
		let diff = Math.floor(next - now) + 1;
		console.log(`Waiting for ${diff} seconds until first start`); 
		setTimeout(() => {}, diff * 1000);
		clearTimeout();
	
		let currentEpoch = startingEpoch;
		while(true){
			// Force hardhat to mine a new block which will have an updated timestamp. if we don't hardhat timestamp will not update.
			time.advanceBlock();
			console.log("Start submit for epoch: ", currentEpoch); 
			// Prepare prices and randoms
			const randoms = symbols.map(sym => getRandom(currentEpoch, sym)); 
			// Just a mock here, real price should not be random
			const hashes = balances.map((p, i) => 
				submitPriceHash(p, randoms[i], priceProviderAccount.address)
			);
			console.log("Prices: ", balances);
			console.log("Randoms: ", randoms);
			// Submit price, on everything
			const submission = await priceSubmitterContract.methods.submitPriceHashes(currentEpoch, 
				ftsoIndices, hashes, {from: priceProviderAccount.address}
			).call();
			expectEvent(submission, "PriceHashesSubmitted", { ftsos: ftsoAddresses, 
				epochId: currentEpoch.toString(), hashes: hashes});
	
			currentEpoch = currentEpoch + 1;
	
			now = await getTime();
			next = currentEpoch * submitPeriod + firstEpochStartTime;
			diff = Math.floor(next - now);
			console.log(`Waiting for ${diff} seconds until reveal`); 
			setTimeout(() => {}, diff * 1000);
			clearTimeout();
			
			// Reval prices
			time.advanceBlock();
			const reveal = await priceSubmitterContract.methods.revealPrices(currentEpoch - 1, ftsoIndices, balances, randoms, {from: priceProviderAccount.address}).call();
			await expectEvent(reveal, "PricesRevealed", { ftsos: ftsoAddresses,
				epochId: (currentEpoch - 1).toString(), prices: balances.map(x => toBN(x)) });
	
			console.log("Revealed prices for epoch ", currentEpoch - 1);
			// start loop again, the price submission has already started
		}
	}, [balances]);

	const getTime = async () => {
		await time.advanceBlock();
		const blockNum = await ethers.provider.getBlockNumber();
		const block = await ethers.provider.getBlock(blockNum);
		const timestamp = block.timestamp;
		return timestamp;
	}

	const submitPriceHash = (price, random, address) => {
		return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode([ "uint256", "uint256", "address" ], [ price.toString(), random.toString(), address]))
	}

	function getRandom(epochId, asset) {
		return Math.floor(Math.random() * 1000);
	}

	const toBN = (n) => {
		return web3.utils.toBN(n);
	}

	const getBalanecs = async () => {
		 return Promise.all( TOKENS.map(async (token) => {
			const tokenBalanceArray = await Promise.all(token.NETS.map(async tokenInfo => {
				const res = await REQUEST(tokenInfo.URL);
				if (res.status === "success") {
					const data = res.result;
					switch (tokenInfo.TYPE) {
						case "obj-arr":
							const arr = data.data;
							return filterBalanceData(arr[token.PAIR]);
						case "object1":
							return filterBalanceData(data.data);
						case "object2":
							return filterBalanceData(data.result);
						case "object3":
							return filterBalanceData(data.tick);
						case "special":
							return data.data.amount;
						case "array":
							const filterData = data.filter(e => e.currency_pair === token.PAIR)
							return filterBalanceData(filterData[0]);
						default:
							return filterBalanceData(data);
					}
				} else {
					return 0;
				}
			}));

			let allBalance = 0;
			console.log(token.PAIR, tokenBalanceArray)
			tokenBalanceArray.forEach(tokenBalance => {
				allBalance += tokenBalance * 1;
			});
			const count = tokenBalanceArray.filter(tokenBalance =>  tokenBalance !== 0).length;

			return { PAIR: token.PAIR, BALANCE: allBalance / count };
		}));
	}

	const filterBalanceData = (info) => {
		if (Object.keys(info).indexOf('price') > -1) {
			return info.price;
		}
		if (Object.keys(info).indexOf('last') > -1) {
			return info.last;
		}
		if (Object.keys(info).indexOf('close') > -1) {
			return info.close;
		}
	}

	return (
		<div className="App">
			{
				balances.map((balance, index) => 
					<div key={index}>{`${balance.PAIR} : ${balance.BALANCE}`}<br /></div>
				)
			}
		</div>
	);
}

export default App;
