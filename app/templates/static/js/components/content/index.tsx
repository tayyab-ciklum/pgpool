import React from 'react';
import { Layout } from 'antd';
import Routes from '../../routes';
import PopUp from '../popup';
const { Content } = Layout;
const AppContent = (): JSX.Element => {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
            }}
        >
            <Routes />
            <PopUp />
        </Content>
    );
};
export default AppContent;
