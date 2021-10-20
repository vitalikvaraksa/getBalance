import React, {useEffect, useState, useContext} from 'react';
import { Table, notification, Card, Button } from 'antd';
import { promisify } from 'util';
import Web3 from 'web3';
import { time, expectEvent } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';
import TOKENS from 'const/tokens';
import { 
	priceSubmitterContractAbi,
	priceSubmitterContractAddr,
	contractRPCUrl,
	priceProviderPrivateKey,
	ftsoRegistryContractAddr,
	ftsoRegistryContractAbi,
	childContractAbi,
	trustedAccountAddr
} from 'const/songbird';
import { AppContext } from 'utils/context';
import REQUEST from 'utils/request';
import './index.css';

const RewardListComponent = (props) => {
	const { ftsoRewardManagerContract } = props;
	const { signer, account } = useContext(AppContext);
    const [balances, setBalances] = useState([]);
	const [claimRewardLoading, setClaimRewardLoading] = useState(false);
	const [rewardListLoading, setRewardListLoading] = useState(false);
	const [rewardAmount, setRewardAmount] = useState(0);
	const [claimableEpochs, setClaimableEpochs] = useState(0);
	const symbols = TOKENS.map(token => token.SYMBOL);
	// const web3 = new Web3(new Web3.providers.HttpProvider(contractRPCUrl));
	// web3.geth.txpool.inspect()
	const web3 = new Web3(contractRPCUrl);
	const priceSubmitterContract = new web3.eth.Contract(priceSubmitterContractAbi, priceSubmitterContractAddr);
	const ftsoRegistryContract = new web3.eth.Contract(ftsoRegistryContractAbi, ftsoRegistryContractAddr);
	const priceProviderAccount = web3.eth.accounts.privateKeyToAccount(priceProviderPrivateKey);
	
	useEffect(async () => {
		setRewardListLoading(true);
		const newBalance = await getBalanecs();
		setBalances(newBalance);
		setRewardListLoading(false);
		// const ftsos = await Promise.all(
		// 	symbols.map(async sym => {
		// 		const addr = await ftsoRegistryContract.methods.getFtsoBySymbol(sym).call()
		// 		const contract = new web3.eth.Contract(childContractAbi, addr);
		// 		return contract;
		// 	}));
			
		// const ftsoAddresses = await Promise.all(
		// 	symbols.map(async sym => await ftsoRegistryContract.methods.getFtsoBySymbol(sym).call()));

		// const ftsoIndices = await Promise.all(
		// 	symbols.map(async sym => (await ftsoRegistryContract.methods.getFtsoIndex(sym).call() * 1)));

		// const {
		// 	0: firstEpochStartTimeBN,
		// 	1: submitPeriodBN,
		// 	2: revealPeriodBN,
		// } = (await ftsos[0].methods.getPriceEpochConfiguration().call());
		
		// const [firstEpochStartTime, submitPeriod, revealPeriod] = 
		// 	[firstEpochStartTimeBN, submitPeriodBN, revealPeriodBN].map(x => x * 1);
		// // Sync time to start on next full transaction id
		// // For a real setting, make sure that computer time is synced with a reliable time provider
		// // Take blockchain time
		// let now = await getTime();
		// const startingEpoch = (Math.floor((now - firstEpochStartTime) / submitPeriod) + 1);
		// let next = startingEpoch * submitPeriod + firstEpochStartTime;
		// let diff = Math.floor(next - now) + 1;
		// console.log(`Waiting for ${diff} seconds until first start`); 
		// sleep(diff * 1000);

	
		// let currentEpoch = startingEpoch;
		// while(true){
		// 	// Force hardhat to mine a new block which will have an updated timestamp. if we don't hardhat timestamp will not update.
		// 	advanceBlock();
		// 	console.log("Start submit for epoch: ", currentEpoch); 
		// 	console.log(await ftsos[0].methods.getCurrentEpochId().call())
		// 	// Prepare prices and randoms
		// 	const randoms = symbols.map(sym => getRandom(currentEpoch, sym)); 
		// 	// Just a mock here, real price should not be random
		// 	const hashes = balances.map((p, i) => 
		// 		submitPriceHash(p.BALANCE, randoms[i], trustedAccountAddr)
		// 	);
		// 	// Submit price, on everything
		// 	const submission = await priceSubmitterContract.methods.submitPriceHashes(currentEpoch, 
		// 		ftsoIndices, hashes).call({from: trustedAccountAddr});
		// 	console.log("submission", submission.logs)

		// 	// await expectEvent(submission, "PriceHashesSubmitted", { ftsos: ftsoAddresses, 
		// 	// 	epochId: (currentEpoch).toString(), hashes: hashes});
	
		// 	currentEpoch = currentEpoch + 1;
	
		// 	now = await getTime();
		// 	next = currentEpoch * submitPeriod + firstEpochStartTime;
		// 	diff = Math.floor(next - now);
		// 	console.log(`Waiting for ${diff} seconds until reveal`); 
		// 	sleep(diff * 1000);
			
		// 	// Reval prices
		// 	advanceBlock();
		// 	const prices = balances.map(balance =>  web3.utils.toWei(balance.BALANCE.toString(), 'ether'));
		// 	const reveal = await priceSubmitterContract.methods.revealPrices(currentEpoch - 1, ftsoIndices, prices, randoms).call({from: trustedAccountAddr});
		// 	// await expectEvent(reveal, "PricesRevealed", { ftsos: ftsoAddresses,
		// 	// 	epochId: (currentEpoch - 1).toString(), prices: balances.map(x => toBN(x)) });
	
		// 	console.log("Revealed prices for sepoch ", currentEpoch - 1);
		// 	// start loop again, the price submission has already started
		// }
	}, []);

	useEffect(async () => {
		if (ftsoRewardManagerContract) {
			const newClaimableEpochs = [];
			let newRewardsAmount = ethers.BigNumber.from(0);
			try {
				const epochs = await ftsoRewardManagerContract.getEpochsWithUnclaimedRewards(account)
				console.log(epochs)
				for (let i = 0; i < epochs.length; i++) {
					const reward = await ftsoRewardManagerContract.getStateOfRewards(account, epochs[i])
					console.log(reward)
					if (reward._claimable) {
						newClaimableEpochs.push(epochs[i])
						for (let j = 0; j < reward._dataProviders.length; j++) {
							if (!reward._claimed[j]) {
								newRewardsAmount = newRewardsAmount.add(reward._rewardAmounts[j])
							}
						}
					}
				}
				setClaimableEpochs(newClaimableEpochs);
				setRewardAmount(ethers.utils.formatEther(newRewardsAmount));
			} catch (err) {
				console.log(err)
			}
		}
	}, [ftsoRewardManagerContract])

	const advanceBlock = () => promisify(web3.currentProvider.send.bind(web3.currentProvider))({
		jsonrpc: '2.0',
		method: 'evm_mine',
		id: new Date().getTime(),
	});

	const sleep = (delay) => {
		var start = new Date().getTime();
		while (new Date().getTime() < start + delay);
	}

	const getTime = async () => {
		await advanceBlock();
		const blockNum = await web3.eth.getBlockNumber();
		const block = await web3.eth.getBlock(blockNum);
		const timestamp = block.timestamp;
		return timestamp;
	}

	const submitPriceHash = (price, random, address) => {
		// return web3.utils.keccak256(web3.eth.abi.encodeParameters([ "uint256", "uint256", "address" ], [ price.toString(), random.toString(), address]))
		return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode([ "uint256", "uint256", "address" ], [  web3.utils.toWei(price.toString(), 'ether'), web3.utils.toWei(random.toString(), 'ether'), address]))
	}

	function getRandom(epochId, asset) {
		return Math.floor(Math.random() * 1000);
	}

	const toBN = (n) => {
		return web3.utils.toBN(n);
	}

	const getBalanecs = async () => {
		 return Promise.all( TOKENS.map(async (token, index) => {
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
						case "book":
							return data.asks[0][0] * 1;
						case "order_book":
							return data.asks[0][0] * 1;
						case "kraken":
							return data.result[token.JOIN_NAME].p[1];
						case "bittrex":
							return data.askRate;
						case "crypto":
							return data.result.data.a;
						case "zb":
							return data.ticker.last;
						case "okex":
							return data.last;
						case "ascendex":
							return data.data.bid[0];
						case "blockchain":
							return data.price_24h;
						case "exmo":
							return data[token.PAIR].last_trade;
						case "trade":
							return data.symbol.last_price;
						case "bitmart":
							return data.data.tickers[0].last_price;
						case "latoken":
							return data.lastPrice;
						case "kline":
							return data.datas[1];
						case "bibox":
							return data.result.last;
						case "decoin":
							return data[0].LastPrice;
						case "mexc":
							return data.data[0].last * 1;
						case "big":
							return data.data.bid.price;
						case "vcc":
							return data.data[token.PAIR].last_price;
						case "liquid":
							return data.last_price_24h;
						case "gokumarket":
							 return data.data.currentPrice;
						case "stormgain":
							const filter = data.filter(e => e.ticker_id === token.PAIR)
							return filter[0].last_price;
						default:
							return filterBalanceData(data);
					}
				} else {
					return 0;
				}
			}));

			let allBalance = 0;
			tokenBalanceArray.forEach(tokenBalance => {
				allBalance += tokenBalance * 1;
			});
			const count = tokenBalanceArray.filter(tokenBalance =>  tokenBalance !== 0).length;

			return { pair: token.PAIR, balance:  parseFloat(allBalance / count).toFixed(5), key: index };
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

	const claimReward = async () => {
		try {
			setClaimRewardLoading(true);
			const tx = await ftsoRewardManagerContract.claimReward(account, claimableEpochs.slice(0, 13));
			try {
				await tx.wait();
				setClaimRewardLoading(false);
				notification.success({message: 'Claim Reward is successed.', duration: 5});
			} catch (err) {
				console.log(err);
				setClaimRewardLoading(false);
				notification.error({message: 'Transaction is failed.', duration: 5});
			}
		} catch (err) {
			console.log(err);
			setClaimRewardLoading(false);
			notification.error({message: 'Claim Reward is faild.', duration: 5});
		}
	}

    return (
        <div className="price-table">
            <Table dataSource={balances} loading={rewardListLoading} pagination={false}>
				<Table.Column title="Token Pair" dataIndex="pair" key="pair" />
				<Table.Column 
					key="balance"
					title="Price Balance" 
					dataIndex="balance" 
					defaultSortOrder="descend"
					sorter={(a, b) => a.balance - b.balance}
				/>
			</Table>
			<div className="card-wrapper-container">
				<Card title="My claimable rewards" loading={claimRewardLoading} bordered >
					<div className="card-content">
						<p>Total Claimable Rewards : {rewardAmount} SGB</p>
						<Button onClick={claimReward} disabled={rewardAmount * 1 === 0}>Claim All Rewards</Button>
					</div>
				</Card>
			</div>
        </div>
    );
}

export default RewardListComponent