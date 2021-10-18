import React, { useState, useEffect } from 'react';
import { Row, Col, Avatar, notification } from 'antd';
import './index.css';

const ConfigureComponent = (props) => {
    const { providersArr, delegateValues, setDelegateValues, remainAmount } = props;
    const [totalValue, setTotalValue] = useState(remainAmount);

    const handleChange = (delegateValue, providerIndex) => {
        const newValues = delegateValues.map((value, index) => providerIndex === index ? delegateValue : value);
        let newTotalValue = 0;
        newValues.forEach((value) => {
            newTotalValue += value * 1;
        });

        if (newTotalValue > 100) {
            notification.info({message: 'Total is not over avaiable value', duration: 5});
            return;
        }

        setTotalValue(newTotalValue);
        setDelegateValues(newValues)
    }

    useEffect(() => {
        let newTotalValue = 0;
        const perDelegateValue = remainAmount / providersArr.length;
        const newDelegateValues = providersArr.map(provider => perDelegateValue);
        setDelegateValues(newDelegateValues);
        newDelegateValues.map(value => {
            newTotalValue += value * 1;
        });

        setTotalValue(newTotalValue);
    }, [])

    return (
        <div className="configure-container">
            <div className="configure-container-title">Configure Delegations</div>
            <Row className="padding-row">
                <Col span={6} className="font-bold">Provider</Col>
                <Col span={10} className="font-bold">Percentage</Col>
            </Row>
            {
                providersArr.map((provider, index) => 
                    <Row key={index} className="padding-row">
                        <Col span={6} className="font-bold"><Avatar src={provider.emblem} />{provider.name}</Col>
                        <Col span={10}>
                            <input 
                                type="number"
                                className="configure-input-value"
                                value={delegateValues[index]}
                                onChange={(e) => handleChange(e.target.value, index)}
                            />
                        </Col>
                    </Row>
                )
            }
            <Row className="padding-row">
                <Col span={6} className="font-gray">Total</Col>
                <Col span={10} className="font-gray">{totalValue}%</Col>
            </Row>
            <Row className="padding-row">
                <Col span={6} className="font-gray">Available</Col>
                <Col span={10} className="font-gray">{remainAmount}%</Col>
            </Row>
        </div>
    );
}

export default ConfigureComponent;