import React from 'react';
import { Layout,Avatar, Space, Button, Badge, Menu, Dropdown, Divider } from 'antd';
import SideMenu from './sideMenu';
import { UserOutlined, BellOutlined } from "@ant-design/icons";
const { Header } = Layout;
const menu = (
    <Menu style={{padding: '14px'}}>
      <h4>Notifications</h4>
      <Divider style={{margin: '0'}}/>
      <ul style={{listStyle: 'none', padding:'5px'}}>
        <Space direction='vertical'>
        <li>menu item dummy data</li>
        <li>menu item dummy data</li>
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
