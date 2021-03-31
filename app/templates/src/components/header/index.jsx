import React from 'react';
import { Layout,Avatar, Space, Button, Badge, Menu, Dropdown } from 'antd';
import SideMenu from './sideMenu';
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {notificationsData} from '../../redux/notifications/notifications.selector';
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
    const notificationsDescription =useSelector(
      notificationsData,
      shallowEqual
    );
    console.log('notifi', notificationsDescription);
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
