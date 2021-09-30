import React, {useEffect, useState} from 'react';
import TOKENS from './const/tokens';
import REQUEST from './utils/request';

function App() {
	const [balances, setBalances] = useState([]);
	
	useEffect(async () => {
		const newBalance = await getBalanecs();
		console.log(newBalance)
		setBalances(newBalance);
	}, []);

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
							console.log("special", data)
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
