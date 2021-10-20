import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Checkbox, Avatar, Spin } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { AppContext } from 'utils/context';
import { ethers } from 'ethers';
import './index.css';

const ConfirmComponent = (props) => {
    const { providersArr, delegateValues, setConfirmCheck, delegateStart, setDoneDelegate, remainAmount, current } = props;
    const { wNatContract, account } = useContext(AppContext);
    const [totalValue, setTotalValue] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        let newTotalValue = 0;
        delegateValues.map(value => {
            newTotalValue += value * 1;
        });

        const delegates = await wNatContract.delegatesOf(account);
        const delegationMode = delegates._delegationMode.toNumber()
        const delegationsCount = delegates._count.toNumber()
        console.log(delegationMode)
        console.log(delegationsCount)

        setTotalValue(newTotalValue);
    }, [current])

    useEffect(async () => {
        if (delegateStart) {
            const delegates = await wNatContract.delegatesOf(account);
            const delegationMode = delegates._delegationMode.toNumber();
            setIsLoading(true);
            providersArr.forEach(async (provider, index) => {
                const  delegateAddress = provider.pools.map(item => item.network === 'songbird' && item.address).filter(item => item !== false)[0];
                try {
                    const tx = (delegationMode == 2) 
                        ? await wNatContract.delegateExplicit(delegateAddress, ethers.utils.parseUnits(delegateValues[index].toString(), 18)) 
                        : await wNatContract.delegate(delegateAddress, ethers.utils.parseUnits(delegateValues[index].toString(), 2));
                    try {
                        await tx.wait();
                        setIsLoading(false);
                        setDoneDelegate(true);
                    } catch (err) {
                        setIsLoading(false);
                        console.log(err)
                    }
                } catch (err) {
                    console.log(err)
                    setIsLoading(false);
                }
            });
        }
    }, [delegateStart])

    return (
        <div className="confirm-container">
            <Spin spinning={isLoading}>
                <div className="confirm-container-title">Confirm Delegations</div>
                <Row className="padding-row">
                    <Col md={6} xs={10} className="font-bold">Provider</Col>
                    <Col md={8} xs={10} className="font-bold">Percentage</Col>
                </Row>
                {
                    providersArr.map((provider, index) => 
                        <Row key={index} className="padding-row">
                            <Col md={6} xs={10} className="font-bold"><Avatar src={provider.emblem} />{provider.name}</Col>
                            <Col md={8} xs={10}>{delegateValues[index]} %</Col>
                        </Row>
                    )
                }
                <Row className="padding-row">
                    <Col md={6} xs={10} className="font-gray">Total</Col>
                    <Col md={8} xs={10} className="font-gray">{totalValue}%</Col>
                </Row>
                <Row className="padding-row">
                    <Col md={6} xs={10} className="font-gray">Available</Col>
                    <Col md={8} xs={10} className="font-gray">{remainAmount}%</Col>
                </Row>
                <div className="font-gray confirm-text">
                    Are you sure your delegations are correct?&nbsp;
                    <Checkbox onChange={(e) => setConfirmCheck(!e.target.checked)}></Checkbox>
                </div>
                <div className="font-gray confirm-text">
                    <InfoCircleFilled />&nbsp;
                    When delegating, your tokens remain in your custody and are free to move at any time.
                </div>
            </Spin>
        </div>
    );
}

export default ConfirmComponent;