import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { Select, Divider, Row, Col, Avatar, Button, Spin, notification } from 'antd';
import './index.css';

const { Option } = Select;

const TokenComponent = (props) => {
    const { wNatContract, account, setAvailableNext, setPastDelegatesAddr, remainAmount, setRemainAmount, current } = props;
    const [WSGBBalance, setWSGBBalance] = useState(0);
    const [delegates, setDelegates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pastDelegates, setPastDelegates] = useState([]);

    useEffect(async () => {
        if (wNatContract) {
            const newDelegates = await wNatContract.delegatesOf(account);
            const URL = 'https://app.ftso.com.au/action/get-ftso-providers';
            try {
                setAvailableNext(true)
                const response = await axios.get(URL);
                const newProviders = response.data.message;
                const newProvidersWithIndex = newProviders.filter(provider => provider.pools.length !== 0).map((provider, index) => ({...provider, key: index}));
                const lowerPastDelegatesAddr = newDelegates._delegateAddresses.map(address => address.toLowerCase());
                const newPastDelegates = newProvidersWithIndex.filter(provider => provider.pools.filter(pool => lowerPastDelegatesAddr.indexOf(pool.address) > -1).length > 0);
                setPastDelegates(newPastDelegates);
                await mainEngine()
            } catch (error) {
                console.log(error);
                setAvailableNext(true);
                notification.error({message: 'Network Error', duration: 5});
            }
        }
    }, [wNatContract, current])

    const mainEngine = async () => {
        const wrappedBalance = await wNatContract.balanceOf(account);
        setWSGBBalance(ethers.utils.formatEther(wrappedBalance));

        const newDelegates = await wNatContract.delegatesOf(account);
        let newRemainAmount = 100;
        newDelegates._bips.forEach(bips => {
            newRemainAmount -= parseInt(bips) / 100;
        });
        
        setPastDelegatesAddr(newDelegates._delegateAddresses);
        setRemainAmount(newRemainAmount);
        setDelegates(newDelegates);
        setAvailableNext(false);
    }

    const unDelegate = async address => {
        setIsLoading(true);
        const amount = '0';
        const tx = (delegates._delegatioinMode * 1 == 2) 
            ? await wNatContract.delegateExplicit(address, ethers.utils.parseUnits(amount, 18)) 
            : await wNatContract.delegate(address, ethers.utils.parseUnits(amount, 2));
        try {
            await tx.wait();
            await mainEngine();
            setIsLoading(false);
            notification.success({message: 'Delegate is successed.', duration: 5});
        } catch (err) {
            console.log(err)
            setIsLoading(false);
            notification.success({message: 'Delegate is Failed.', duration: 5});
        }
    }
    
    return (
        <div className="token-container">
            <Spin spinning={isLoading}>
                <div className="token-container-title">Token</div>
                <div className="token-container-explain">Choose if you are delegating WSGB or an F-Asset (ie. FXRP/FDOGE).</div>
                <div className="select-token">
                    <div className="select-container gray-container">
                        <Select defaultValue="wsgb">
                            <Option value="wsgb">WSGB</Option>
                            <Option value="lucy">FXRP</Option>
                            <Option value="fltc">FLTC</Option>
                            <Option value="fbch">FBCH</Option>
                            <Option value="fxlm">FXLM</Option>
                            <Option value="fdoge">FDOGE</Option>
                        </Select>
                        <div className="selected-token-balance">Balance: {parseFloat(WSGBBalance).toFixed(5)}</div>
                    </div>
                    <div className="info-container gray-container">
                        <span>Allocation Availave</span>
                        <span>{remainAmount}%</span>
                    </div>
                </div>
                <Divider orientation="left" >WSGB Delegations</Divider>
                <div className="delegation">
                    {
                        delegates.length === 0 || delegates._count * 1 === 0 
                            ? <div className="delegation-status gray-container">
                                No Delegations
                            </div>
                            : pastDelegates.length !== 0 && delegates._delegateAddresses.map((address, index) => {
                                const bips = delegates._bips[index] * 1 / 100;
                                return (
                                    <Row key={index} className="delegation-status gray-container">
                                        <Col span={10} className="font-bold align-center"><Avatar src={pastDelegates[index].emblem} />&nbsp;{pastDelegates[index].name}</Col>
                                        <Col span={6}>{bips}%</Col>
                                        <Col span={6}><Button onClick={() => unDelegate(address)}>Undelegate</Button></Col>
                                    </Row>
                                );
                            })
                    }
                    <div className="delegation-info">
                        Configure your delegations in the following steps.
                    </div>
                </div>
            </Spin>
        </div>
    );
}

export default TokenComponent;