import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/">
         Logout
        </a>
      </Menu.Item>
    </Menu>
  );
const SideMenu = () => {
  const { t } = useTranslation();
    return (
    <Dropdown overlay={menu} placement="topRight">
    <Button type='text' style={{float:"right", color: '#ffffff'}} onClick={e => e.preventDefault()}>
     {t('Account')}<DownOutlined />
    </Button>
  </Dropdown>
    );
};
export default SideMenu;
