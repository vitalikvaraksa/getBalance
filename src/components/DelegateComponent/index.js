import React, { useState, useContext, useEffect } from 'react';
import { Steps, Button, message, Divider, notification } from 'antd';
import { AppContext } from 'utils/context';
import TokenComponent from './TokenComponent';
import ProvidersComponent from './ProvidersComponent';
import ConfigureComponent from './ConfigureComponent';
import ConfirmComponent from './ConfirmComponent';
import CompleteComponent from './CompleteComponent';
import './index.css';

const { Step } = Steps;

const DelegateComponent = (props) => {
    const { wNatContract, account} = useContext(AppContext);
    const [current, setCurrent] = useState(0);
    const [providersArr, setProvidersArr] = useState([]);
    const [totalProviders, setTotalProviders] = useState([]);
    const [delegateValues, setDelegateValues] = useState([]);
    const [confirmCheck, setConfirmCheck] = useState(false);
    const [delegateStart, setDelegateStart] = useState(false);
    const [availableNext, setAvailableNext] = useState(true);
    const [doneDelegate, setDoneDelegate] = useState(false);
    const [pastDelegatesAddr, setPastDelegatesAddr] = useState([]);
    const [remainAmount, setRemainAmount] = useState(100);


    const next = () => {
        if (current === 1 && providersArr.length === 0) {
            notification.info({message: "You must select least one provider!", duration: 5});
            return;
        }

        if (current === 2) {
            let newTotalValue = 0;
            delegateValues.forEach(value => {newTotalValue += value * 1;});
            if (newTotalValue > remainAmount) {
                notification.info({message: "Total delegate amount is not over available."});
                return;
            }
        }

        if (current === 3) {
            setDelegateStart(true);
            setAvailableNext(false);
        } else {
            setCurrent(current + 1);
        }
    };

    useEffect(() => {
        if (current === 3) setConfirmCheck(true);
        else setConfirmCheck(false)
    }, [current]);

    useEffect(() => {
        doneDelegate && setCurrent(current + 1);
    }, [doneDelegate])

    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
          title: 'Token',
        },
        {
          title: 'Providers',
        },
        {
          title: 'Configure',
        },
        {
          title: 'Confirm',
        },
        {
          title: 'Complete',
        },
      ];

    return (
        <div className="delegate-container">
            <Steps current={current}>
                {
                    steps.map(item => 
                        <Step key={item.title} title={item.title} />
                    )
                }
            </Steps>
            <Divider />
            <div className="steps-content">
                {current === 0 && <TokenComponent 
                                    wNatContract={wNatContract}
                                    setPastDelegatesAddr={setPastDelegatesAddr}
                                    setAvailableNext={setAvailableNext}
                                    remainAmount={remainAmount}
                                    setRemainAmount={setRemainAmount}
                                    account={account} />}
                {current === 1 && <ProvidersComponent 
                                    setProvidersArr={setProvidersArr}
                                    providersArr={providersArr} 
                                    totalProviders={totalProviders}
                                    pastDelegatesAddr={pastDelegatesAddr}
                                    setAvailableNext={setAvailableNext}
                                    setTotalProviders={setTotalProviders} />}
                {current === 2 && <ConfigureComponent 
                                    providersArr={providersArr} 
                                    delegateValues={delegateValues} 
                                    remainAmount={remainAmount}
                                    setDelegateValues={setDelegateValues} />}
                {current === 3 && <ConfirmComponent 
                                    providersArr={providersArr}
                                    delegateValues={delegateValues}
                                    setConfirmCheck={setConfirmCheck}
                                    delegateStart={delegateStart}
                                    setDoneDelegate={setDoneDelegate}
                                    remainAmount={remainAmount}
                                    setAvailableNext={setAvailableNext} />}
                {current === 4 && <CompleteComponent />}
            </div>
            <div className="steps-action">
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()} disabled={confirmCheck || availableNext}>
                    Next
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
                )}
            </div>
        </div>
    );
}

export default DelegateComponent;