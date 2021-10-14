import React from 'react';
import { Layout, Tabs, Button } from 'antd';
import RewardListComponent from 'components/RewardListComponent';
import WrapComponent from 'components/WrapComponent';
import DelegateComponent from 'components/DelegateComponent';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function App() {
	return (
		<div className="App">
			<Layout className="layout">
				<Header>
					<div className="header">
						<div className="logo">FTSO</div>
						<Button type="primary" shape="round">Connect Wallet</Button>
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
		</div>
	);
}

export default App;
