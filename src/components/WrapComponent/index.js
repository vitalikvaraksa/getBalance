import React, {useState} from 'react';
import { Button } from 'antd';
import './index.css';

const WrapComponent = (props) => {
    const [wrapStatus, setWrapStatus] = useState(true);
    const [sgbBalance, setSgbBalance] = useState(0);
    const [wsgbBalance, setWsgbBalance] = useState(0);
    const [sgbValue, setSgbValue] = useState('');
    const [wsgbValue, setWsgbValue] = useState('');
    return (
        <div className="wrap-token">
            <div className="operate-section">
                <div className="switch-wrap">
                    <span className={`switch-wrap-btn ${wrapStatus && "selected"}`} onClick={() => setWrapStatus(true)} >WRAP</span>
                    &nbsp;/&nbsp;
                    <span className={`switch-wrap-btn ${!wrapStatus && "selected"}`} onClick={() => setWrapStatus(false)}>UNWRAP</span>
                </div>
                <div className="wrap-from">
                    <div className="name-value">
                        <div>{wrapStatus ? 'SGB' : 'WSGB'}</div>
                        <input 
                            className="input-value"
                            placeholder="0.0"
                            value={!sgbValue ? '' : sgbValue}
                            onChange={(e) => setSgbValue(parseInt(e.target.value))} />
                    </div>
                    <div className="balance">{`Balance: ${sgbBalance.toFixed(5)} ${wrapStatus ? 'SGB' : 'WSGB'}`}</div>
                </div>
                <div className="wrap-to">
                    <div className="name-value">
                        <div>{wrapStatus ? 'WSGB' : 'SGB'}</div>
                        <input 
                            className="input-value"
                            placeholder="0.0"
                            value={!wsgbValue ? '' : wsgbValue}
                            onChange={(e) => setWsgbValue(parseInt(e.target.value))} />
                    </div>
                    <div className="balance">{`Balance: ${wsgbBalance.toFixed(5)} ${wrapStatus ? 'SGB' : 'WSGB'}`}</div>
                </div>
                <Button className="wrap-btn" type="primary" shape="round" size="Default" >{wrapStatus ? 'Wrap' : 'Unwrap'}</Button>
            </div>
        </div>
    );
}

export default WrapComponent;