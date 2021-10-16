import React, { useState, useEffect } from 'react';
import { Layout, Tabs, Button, Modal, Avatar, Spin, Card } from 'antd';
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from 'ethers';
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector';
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector';
import { AppContext } from 'utils/context';
import { useEagerConnect, useInactiveListener } from 'utils/hook';
import { injected } from 'utils/connector';
import { 
    getPriceSubmitterContract,
    getFtsoManagerContract,
    getFtsoRewardManagerContract,
    getWNatContract
} from 'const/ftsoContracts';
import RewardListComponent from 'components/RewardListComponent';
import WrapComponent from 'components/WrapComponent';
import DelegateComponent from 'components/DelegateComponent';
import { MetaMaskImage, DcentImage, LedgerImage, BifrostImage } from 'img';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function App() {
    const { connector, library, chainId, account, deactivate, activate, error, active } = useWeb3React();
	const [activatingConnector, setActivatingConnector] = useState();
	const [isModalVisible, setModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [currentAccount, setCurrentAccount] = useState(account);
	const [wNatContract, setWNatContract] = useState();
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	
	useEffect(() => {
		if (activatingConnector && activatingConnector === connector) {
			setActivatingConnector(undefined)
		}
	}, [activatingConnector, connector]);

	useEffect(() => {
		setIsLoading(false);
		setCurrentAccount(account);
		setModalVisible(false);
	}, [connector]);

	useEffect(async () => {
        if (account) {
            const priceSubmitterContract = getPriceSubmitterContract(provider);
            const ftsoManagerContract = getFtsoManagerContract(provider, await priceSubmitterContract.getFtsoManager());
            const ftsoRewardManagerContract = getFtsoRewardManagerContract(signer, await ftsoManagerContract.rewardManager());
            const contract = getWNatContract(signer, await ftsoRewardManagerContract.wNat());
            setWNatContract(contract);
        }
    }, [account])


	const triedEager = useEagerConnect();
    useInactiveListener(!triedEager || !!activatingConnector)

	const connectWallet = () => {
		setIsLoading(true);
		activate(injected)
	};

	const handleCancel = () => {
		setModalVisible(false);
	}

	const installMetaMask = () => {
		window.open('https://metamask.io/download', '_blank');
	}

	const getErrorMessage = (error) => {
		if (error instanceof NoEthereumProviderError) {
			return `No Binance browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.`
		} else if (error instanceof UnsupportedChainIdError) {
		  	return "You're connected to an unsupported network. Please change network as Songbird chain"
		} else if (
		  	error instanceof UserRejectedRequestErrorInjected ||
		  	error instanceof UserRejectedRequestErrorWalletConnect ||
		  	error instanceof UserRejectedRequestErrorFrame
		) {
		  	return 'Please authorize this website to access your Ethereum account.'
		} else {
		  	console.error(error)
		  	return 'An unknown error occurred. Check the console for more details.'
		}
	}

	return (
		<AppContext.Provider value={{library, activate, account, chainId, deactivate, error, active, provider, wNatContract, signer}}>
			<div className="App">
				<Layout className="layout">
					<Header>
						<div className="header">
							<div className="logo">FTSO</div>
							<Button type="primary" shape="round" onClick={() => !active && setModalVisible(true)}>
								{!active ? "Connect Wallet" : currentAccount && `${currentAccount.substring(0, 9)}...${currentAccount.slice(-5)}`}
							</Button>
						</div>
					</Header>
					<Content className="content" >
						<div className="site-layout-content">
							<Tabs className="tab-container" type="card">
								<TabPane tab="Price Balances" key={1}>
									<RewardListComponent />
								</TabPane>
								<TabPane tab="Wrap/Unwrap" key={2}>
									<WrapComponent />
								</TabPane>
								<TabPane tab="Delegate" key={3}>
									<DelegateComponent />
								</TabPane>
							</Tabs>
						</div>
					</Content>
					<Footer className="footer" >
						FTSO ©2021 Created by Master
					</Footer>
				</Layout>
				<Modal title="Sellect Wallet" visible={isModalVisible} onCancel={handleCancel} footer={false}>
					<Spin spinning={isLoading && !(error instanceof NoEthereumProviderError)} tip="Loading..." >
						<Card onClick={connectWallet} hoverable style={{marginBottom: '8px'}} >
							<div className="connector-content">
								<Avatar shape="square" src={MetaMaskImage} /> 
								<span className="metamask-title" >MetaMask</span>
							</div>
						</Card>
						<Card hoverable style={{marginBottom: '8px'}}>
							<div className="connector-content">
								<Avatar shape="square" src={DcentImage} /> 
								<span className="metamask-title" >D'CENT</span>
							</div>
						</Card>
						<Card hoverable style={{marginBottom: '8px'}}>
							<div className="connector-content">
								<Avatar shape="square" src={BifrostImage} /> 
								<span className="metamask-title" >Bifrost</span>
							</div>
						</Card>
						<Card hoverable style={{marginBottom: '8px'}}>
							<div className="connector-content">
								<Avatar shape="square" src={LedgerImage} /> 
								<span className="metamask-title" >Ledger</span>
							</div>
						</Card>
					</Spin>
					{(error instanceof NoEthereumProviderError) && (
						<Button onClick={installMetaMask} style={{margin: '10px 0'}}>Install MetaMask</Button>
					)}
					{!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0', color: '#16ACE2' }}>{getErrorMessage(error)}</h4>}
				</Modal>
			</div>
		</AppContext.Provider>
	);
}

export default function () {
	const getLibrary = provider => {
		const library = new Web3Provider(provider);
		library.pollingInterval = 12000;
		return library;
	};

	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<App />
		</Web3ReactProvider>
	);
}