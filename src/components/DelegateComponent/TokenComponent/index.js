import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Select, Divider } from 'antd';
import './index.css';

const { Option } = Select;

const TokenComponent = (props) => {
    const { wNatContract, signer, account } = props;
    const [WSGBBalance, setWSGBBalance] = useState(0);

    useEffect(async () => {
        if (wNatContract) {
            const wrappedBalance = await wNatContract.balanceOf(account);
            setWSGBBalance(ethers.utils.formatEther(wrappedBalance));
        }
    }, [wNatContract])
    
    return (
        <div className="token-container">
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
                    <span>100%</span>
                </div>
            </div>
            <Divider orientation="left" >WSGB Delegations</Divider>
            <div className="delegation">
                <div className="delegation-status gray-container">
                    No Delegations
                </div>
                <div className="delegation-info">
                    Configure your delegations in the following steps.
                </div>
            </div>
        </div>
    );
}

export default TokenComponent;