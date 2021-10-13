import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Checkbox } from 'antd';
import './index.css';

const { Column } = Table;

const ProvidersComponent = (props) => {
    const [providers, setProviers] = useState([]);
    const [providersLoading, setProvidersLoading] = useState(false);

    useEffect(async () => {
        const URL = 'https://app.ftso.com.au/action/get-ftso-providers';
        setProvidersLoading(true);
        const response = await axios.get(URL);
        const newProviders = response.data.message;
        const newProvidersWithIndex = newProviders.map((provider, index) => ({...provider, key: index}))
        setProviers(newProvidersWithIndex);
        setProvidersLoading(false);
    }, []);

    return (
        <div className="providers-container">
            <div className="providers-container-title">Choose Providers</div>
            <Table className="providers-table" dataSource={providers} loading={providersLoading} >
                <Column key="name" title="Name" dataIndex="name" />
                <Column key="website" title="Website" render={provider => <a href={provider.website_url} >{provider.website_url.split('//')[1]}</a>} />
                <Column key="fee" title="Fee">20%</Column>
                <Column key="check" render={(provider) => <Checkbox></Checkbox>} />
            </Table>
        </div>
    );
}

export default ProvidersComponent;