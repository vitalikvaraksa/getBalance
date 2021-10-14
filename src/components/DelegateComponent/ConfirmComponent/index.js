import React from 'react';
import { Row, Col, Checkbox } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import './index.css';

const ConfirmComponent = (props) => {
    return (
        <div className="confirm-container">
            <div className="confirm-container-title">Confirm Delegations</div>
            <Row className="padding-row">
                <Col span={4} className="font-bold">Provider</Col>
                <Col span={8} className="font-bold">Percentage</Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-bold">FTSO AU</Col>
                <Col span={8}>50 %</Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-bold">FTSO EU</Col>
                <Col span={8}>50 %</Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-gray">Total</Col>
                <Col span={8} className="font-gray">100%</Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-gray">Available</Col>
                <Col span={8} className="font-gray">100%</Col>
            </Row>
            <div className="font-gray confirm-text">
                Are you sure your delegations are correct?&nbsp;
                <Checkbox></Checkbox>
            </div>
            <div className="font-gray confirm-text">
                <InfoCircleFilled />&nbsp;
                When delegating, your tokens remain in your custody and are free to move at any time.
            </div>
        </div>
    );
}

export default ConfirmComponent;