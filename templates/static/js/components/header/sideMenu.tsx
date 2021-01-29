import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from "@ant-design/icons";
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/">
         Logout
        </a>
      </Menu.Item>
    </Menu>
  );
const SideMenu = (): JSX.Element => {
    return (
    <Dropdown overlay={menu} placement="topRight">
    <Button type='text' style={{float:"right", top: '20%', right:'4%'}} onClick={e => e.preventDefault()}>
      Postgres Account <DownOutlined />
    </Button>
  </Dropdown>
    );
};
export default SideMenu;
