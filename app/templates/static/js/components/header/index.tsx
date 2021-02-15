import React from 'react';
import { Layout,Avatar, Space } from 'antd';
import SideMenu from './sideMenu';
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
const AppHeader = (): JSX.Element => {
    return (
        <Header style={{ padding: 0 }}>
        <Space direction='horizontal' style={{float:'right', marginTop:'14px'}}>
        <Avatar size={35} icon={<UserOutlined />}  style={{background: "#fffff"}}/>
        <SideMenu/>
        </Space>
        </Header>
    );
};
export default AppHeader;
