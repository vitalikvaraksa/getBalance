import React, {useState, useContext, useEffect} from 'react';
import { ethers } from 'ethers';
import { Button, Spin, notification, Avatar } from 'antd';
import { AppContext } from 'utils/context';
import { SGBImage, WSGBImage } from 'img';
import './index.css';

const WrapComponent = (props) => {
    const { active, wNatContract, account, signer } = useContext(AppContext);
    const [wrapStatus, setWrapStatus] = useState(true);
    const [sgbBalance, setSgbBalance] = useState(0);
    const [wsgbBalance, setWsgbBalance] = useState(0);
    const [sgbValue, setSgbValue] = useState('');
    const [wsgbValue, setWsgbValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const getBalance = async () => {
        if (account && wNatContract) {
            const wrappedBalance = await wNatContract.balanceOf(account)
            const newSgbBalance = await signer.getBalance();
            setWsgbBalance(ethers.utils.formatEther(wrappedBalance));
            setSgbBalance(ethers.utils.formatEther(newSgbBalance));
        } else {
            setWsgbBalance(0);
            setSgbBalance(0);
        }
    }

    useEffect(async () => {
        await getBalance();
    }, [wNatContract])

    const wrapToken = async () => {
        if (sgbValue > sgbBalance) {
            notification.info({message: "SGB value must be under of Balance!", duration: 5})
            return
        }
        try {
            const tx = await wNatContract.deposit({'value': ethers.utils.parseUnits(sgbValue.toString(), 18)});
            setIsLoading(true);
            await tx.wait();
            await getBalance();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const unWrapToken = async () => {
        if (sgbValue > wsgbBalance) {
            notification.info({message: "WSGB value must be under of Balance!", duration: 5})
            return
        }
        try {
            const tx = await wNatContract.withdraw(ethers.utils.parseUnits(sgbValue.toString(), 18));
            setIsLoading(true);
            await tx.wait();
            await getBalance();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const changeValue = (e) => {
        setWsgbValue(parseInt(e.target.value))
        setSgbValue(parseInt(e.target.value))
    }

    const addToken = async () => {
        try {
            await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                  type: 'ERC20',
                  options: {
                    address: wNatContract.address,
                    symbol: await wNatContract.symbol(),
                    decimals: await wNatContract.decimals(),
                    image: 'https://cloudflare-ipfs.com/ipfs/QmU5SnCqdoC8YzVnwZv4cE1Mz1Qscg2JzGuFV6wHvAnXiu',
                  }
                }
            })
        } catch (err) {
            console.log(err);
            notification.error({message: "Operation is failed.", duration: 5});
        }
    }

    return (
        <div className="wrap-token">
            {
                !active && <div className="error-text">*Please Connect Wallet*</div>
            }
            <Spin spinning={isLoading} tip={wrapStatus ? "Wrapping..." : "Unwrapping..."}>
                <div className="operate-section">
                    <div className="switch-wrap">
                        <div className="wrap-group">
                            <span className={`switch-wrap-btn ${wrapStatus && "selected"}`} onClick={() => setWrapStatus(true)} >WRAP</span>
                            &nbsp;/&nbsp;
                            <span className={`switch-wrap-btn ${!wrapStatus && "selected"}`} onClick={() => setWrapStatus(false)}>UNWRAP</span>
                        </div>
                        <Button ghost type="primary"  size="small" shape="round" onClick={addToken}>Add WSGB token into MetaMask</Button>
                    </div>
                    <div className="wrap-from">
                        <div className="name-value">
                            <div className="name"><Avatar shape="circle" src={wrapStatus ? SGBImage : WSGBImage} style={{marginRight: '8px'}} />{wrapStatus ? 'SGB' : 'WSGB'}</div>
                            <input 
                                className="input-value"
                                placeholder="0.0"
                                value={!sgbValue ? '' : sgbValue}
                                disabled={!active}
                                onChange={changeValue} />
                        </div>
                        <div className="balance">{`Balance: ${wrapStatus ? parseFloat(sgbBalance).toFixed(5) : parseFloat(wsgbBalance).toFixed(5)} ${wrapStatus ? 'SGB' : 'WSGB'}`}</div>
                    </div>
                    <div className="wrap-to">
                        <div className="name-value">
                            <div className="name"><Avatar shape="circle" src={!wrapStatus ? SGBImage : WSGBImage} style={{marginRight: '8px'}} />{wrapStatus ? 'WSGB' : 'SGB'}</div>
                            <input 
                                className="input-value"
                                placeholder="0.0"
                                value={!wsgbValue ? '' : wsgbValue}
                                disabled={!active}
                                onChange={changeValue} />
                        </div>
                        <div className="balance">{`Balance: ${wrapStatus ? parseFloat(wsgbBalance).toFixed(5) : parseFloat(sgbBalance).toFixed(5)} ${wrapStatus ? 'WSGB' : 'SGB'}`}</div>
                    </div>
                    <Button 
                        className="wrap-btn"
                        type="primary"
                        shape="round"
                        size="Default"
                        disabled={!active}
                        onClick={wrapStatus ? wrapToken : unWrapToken}
                    >
                        {wrapStatus ? 'Wrap' : 'Unwrap'}
                    </Button>
                </div>
            </Spin>
        </div>
    );
}

export default WrapComponent;