import React from 'react';
import { Layout } from 'antd';
import Routes from '../../routes';
const { Content } = Layout;
const AppContent = (): JSX.Element => {
    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
            }}
        >
            <Routes />
        </Content>
    );
};
export default AppContent;
