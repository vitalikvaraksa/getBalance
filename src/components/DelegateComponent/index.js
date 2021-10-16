import React, { useState, useContext } from 'react';
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
    const { wNatContract, signer, account} = useContext(AppContext);
    const [current, setCurrent] = useState(0);
    const [providersArr, setProvidersArr] = useState([]);
    const [totalProviders, setTotalProviders] = useState([]);

    const next = () => {
        if (current === 1 && providersArr.length === 0) {
            notification.info({message: "You must select least one provider!", duration: 5});
            return;
        }
        setCurrent(current + 1);
    };

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
                {current === 0 && <TokenComponent wNatContract={wNatContract} signer={signer} account={account} />}
                {current === 1 && <ProvidersComponent setProvidersArr={setProvidersArr} providersArr={providersArr} totalProviders={totalProviders} setTotalProviders={setTotalProviders} />}
                {current === 2 && <ConfigureComponent />}
                {current === 3 && <ConfirmComponent />}
                {current === 4 && <CompleteComponent />}
            </div>
            <div className="steps-action">
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
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