import React from 'react';
import { Layout,Avatar, Space } from 'antd';
import SideMenu from './sideMenu';
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
const AppHeader = (): JSX.Element => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
        <Space direction='horizontal' style={{float:'right', marginTop:'14px'}}>
        <Avatar size={35} icon={<UserOutlined />}  style={{background:'#002140'}}/>
        <SideMenu/>
        </Space>
        </Header>
    );
};
export default AppHeader;
