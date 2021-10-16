import React, { useState, useEffect } from 'react';
import { notification, Avatar } from 'antd';
import axios from 'axios';
import { Table, Checkbox } from 'antd';
import './index.css';

const { Column } = Table;

const ProvidersComponent = (props) => {
    const { setProvidersArr, providersArr, totalProviders, setTotalProviders, setAvailableNext } = props;
    const [providers, setProviders] = useState(totalProviders);
    const [providersLoading, setProvidersLoading] = useState(false);
    const [selectedProviders, setSelectedProviders] = useState(providersArr);

    const handleProvider = (provider) => {
        let newSelectedProviders;
        if (selectedProviders.length === 0 || selectedProviders.filter(item => item === provider).length === 0) {
            if (selectedProviders.length === 2) {
                notification.info({message: 'You may select up to 2 providers to delegate to.', duration: 5});
                return;
            } else {
                newSelectedProviders = [...selectedProviders, provider];
            }
        } else {
            newSelectedProviders = selectedProviders.map(item => item !== provider && item).filter(item => item !== false);
        }
        setSelectedProviders(newSelectedProviders);
        setProvidersArr(newSelectedProviders);
    }

    useEffect(async () => {
        if (totalProviders.length === 0) {
            const URL = 'https://app.ftso.com.au/action/get-ftso-providers';
            try {
                setProvidersLoading(true);
                setAvailableNext(true);
                const response = await axios.get(URL);
                const newProviders = response.data.message;
                const newProvidersWithIndex = newProviders.map((provider, index) => ({...provider, key: index}))
                setProviders(newProvidersWithIndex);
                setTotalProviders(newProvidersWithIndex);
                setProvidersLoading(false);
                setAvailableNext(false);
            } catch (error) {
                setProvidersLoading(false);
                notification.error({message: 'Network Error', duration: 5});
            }
        }
    }, []);

    return (
        <div className="providers-container">
            <div className="providers-container-title">Choose Providers</div>
            <Table className="providers-table" dataSource={providers} loading={providersLoading}>
                <Column key="name" title="Name" render={provider => <div><Avatar src={provider.emblem} />&nbsp;{provider.name}</div>} />
                <Column key="website" title="Website" render={provider => <a href={provider.website_url} >{provider.website_url.split('//')[1]}</a>} />
                <Column key="fee" title="Fee">20%</Column>
                <Column key="check" render={(provider) => 
                    <Checkbox 
                        checked={selectedProviders.indexOf(provider) > -1 ? true : false}
                        onChange={() => handleProvider(provider)} />} 
                />
            </Table>
        </div>
    );
}

export default ProvidersComponent;