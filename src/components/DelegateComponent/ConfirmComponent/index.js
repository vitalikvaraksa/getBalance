import React, { useEffect, useState } from 'react';
import { Row, Col, Checkbox, Avatar } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import './index.css';

const ConfirmComponent = (props) => {
    const { providersArr, delegateValues, setConfirmCheck } = props;
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        let newTotalValue = 0;
        delegateValues.map(value => {
            newTotalValue += value * 1;
        });

        setTotalValue(newTotalValue);
    }, [])

    return (
        <div className="confirm-container">
            <div className="confirm-container-title">Confirm Delegations</div>
            <Row className="padding-row">
                <Col span={6} className="font-bold">Provider</Col>
                <Col span={8} className="font-bold">Percentage</Col>
            </Row>
            {
                providersArr.map((provider, index) => 
                    <Row key={index} className="padding-row">
                        <Col span={6} className="font-bold"><Avatar src={provider.emblem} />{provider.name}</Col>
                        <Col span={8}>{delegateValues[index]} %</Col>
                    </Row>
                )
            }
            <Row className="padding-row">
                <Col span={6} className="font-gray">Total</Col>
                <Col span={8} className="font-gray">{totalValue}%</Col>
            </Row>
            <Row className="padding-row">
                <Col span={6} className="font-gray">Available</Col>
                <Col span={8} className="font-gray">100%</Col>
            </Row>
            <div className="font-gray confirm-text">
                Are you sure your delegations are correct?&nbsp;
                <Checkbox onChange={(e) => setConfirmCheck(!e.target.checked)}></Checkbox>
            </div>
            <div className="font-gray confirm-text">
                <InfoCircleFilled />&nbsp;
                When delegating, your tokens remain in your custody and are free to move at any time.
            </div>
        </div>
    );
}

export default ConfirmComponent;