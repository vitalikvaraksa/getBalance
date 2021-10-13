import React, { useState } from 'react';
import { Steps, Button, message, Divider } from 'antd';
import TokenComponent from './TokenComponent';
import ProvidersComponent from './ProvidersComponent';
import './index.css';

const { Step } = Steps;

const DelegateComponent = (props) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
          title: 'Token',
          content: <TokenComponent />,
        },
        {
          title: 'Providers',
          content: <ProvidersComponent />,
        },
        {
          title: 'Configure',
          content: 'Configure-content',
        },
        {
          title: 'Confirm',
          content: 'Confirm-content',
        },
        {
          title: 'Complete',
          content: 'Complete-content',
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
            <div className="steps-content">{steps[current].content}</div>
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