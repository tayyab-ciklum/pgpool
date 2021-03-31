import React from 'react';
import { Layout,Avatar, Space, Button, Badge, Menu, Dropdown } from 'antd';
import SideMenu from './sideMenu';
import { UserOutlined, BellOutlined, SyncOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { shallowEqual, useSelector } from 'react-redux';
import {notificationsData, notificationsCounter} from '../../redux/notifications/notifications.selector';
import { useTranslation } from 'react-i18next';
const { Header } = Layout;
const AppHeader = () => {
    const {t} = useTranslation();
    const icons = {
      'inprogress':  <SyncOutlined spin style={{color:"blue"}} />,
      'success': <CheckCircleTwoTone twoToneColor="#52c41a"/>
    }
    const notificationsDescription =useSelector(
      notificationsData,
      shallowEqual
    );
    const counter =useSelector(
      notificationsCounter,
      shallowEqual
    );
    const menu = (
      <Menu style={{padding: '14px'}}>
        <h4 style={{borderBottom: '1px solid gray'}}>Notifications</h4>
        <ul style={{listStyle: 'none', padding:'5px'}}>
          <Space direction='vertical'>
            {notificationsDescription.length > 0 ? notificationsDescription.map(notification => <li key={notification.title}>{icons[notification.icon]} {t(notification.title)}</li>) : <li key="1">{t("NoNotifications")}</li> }
          </Space>
        </ul>
      </Menu>
    );
    return (
        <Header className="header">
        <Space direction='horizontal' >
        <Dropdown overlay={menu} placement="topRight">
        <Button type='text' onClick={e => e.preventDefault()}>
        <Badge count={counter} size='small' showZero>
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
