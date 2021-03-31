import React from 'react';
import { Layout,Avatar, Space, Button, Badge, Menu, Dropdown } from 'antd';
import SideMenu from './sideMenu';
import { UserOutlined, BellOutlined } from "@ant-design/icons";
const { Header } = Layout;
const menu = (
    <Menu style={{padding: '14px'}}>
      <h4 style={{borderBottom: '1px solid gray'}}>Notifications</h4>
      <ul style={{listStyle: 'none', padding:'5px'}}>
        <Space direction='vertical'>
        <li key='1'>menu item dummy data</li>
        <li key='2'>menu item dummy data</li>
        </Space>
      </ul>
    </Menu>
  );
const AppHeader = () => {
    return (
        <Header className="header">
        <Space direction='horizontal' >
        <Dropdown overlay={menu} placement="topRight">
        <Button type='text' onClick={e => e.preventDefault()}>
        <Badge count={0} size='small' showZero>
        <BellOutlined style={{ color: 'white', fontSize: '21px' }}/>
        </Badge>
        </Button>
        </Dropdown>
        <Avatar size={35} icon={<UserOutlined />}  style={{background: "#fffff"}}/>
        <SideMenu/>
        </Space>
        </Header>
    );
};
export default AppHeader;
