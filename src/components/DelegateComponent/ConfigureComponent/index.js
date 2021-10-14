import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

const ConfigureComponent = (props) => {
    return (
        <div className="configure-container">
            <div className="configure-container-title">Configure Delegations</div>
            <Row className="padding-row">
                <Col span={4} className="font-bold">Provider</Col>
                <Col span={8} className="font-bold">Percentage</Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-bold">FTSO AU</Col>
                <Col span={8}><input type="number" className="configure-input-value" defaultValue={50} />&nbsp;&nbsp;<span className="font-gray font-small">Add Remaining</span></Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-bold">FTSO EU</Col>
                <Col span={8}><input type="number" className="configure-input-value" defaultValue={50} />&nbsp;&nbsp;<span className="font-gray font-small">Add Remaining</span></Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-gray">Total</Col>
                <Col span={8} className="font-gray">100%</Col>
            </Row>
            <Row className="padding-row">
                <Col span={4} className="font-gray">Available</Col>
                <Col span={8} className="font-gray">100%</Col>
            </Row>
        </div>
    );
}

export default ConfigureComponent;