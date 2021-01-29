import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { HomeOutlined, SettingOutlined, ToolOutlined, LaptopOutlined, GoldOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../../utils/constants';
const { SubMenu } = Menu;
type Props = {
    collapsed: boolean;
    toggle: () => void;
};
const AppMenu = ({ collapsed, toggle }: Props): JSX.Element => {
    const History = useHistory();
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => History.push(RouteNames.Dashboard.path)}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<ToolOutlined />} onClick={() => History.push(RouteNames.AdminSettings.path)}>
                    Admin settings
                </Menu.Item>
                <SubMenu key="node1" icon={<GoldOutlined />} title="Node 1">
                    <Menu.Item key="sub11" icon={<LaptopOutlined />}>
                        Node status
                    </Menu.Item>
                    <Menu.Item key="sub12" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="node2" icon={<GoldOutlined />} title="Node 2">
                    <Menu.Item key="sub21" icon={<LaptopOutlined />}>
                        Node status
                    </Menu.Item>
                    <Menu.Item key="sub22" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="node3" icon={<GoldOutlined />} title="Node 3">
                    <Menu.Item key="sub31" icon={<LaptopOutlined />}>
                        Node status
                    </Menu.Item>
                    <Menu.Item key="sub32" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};
export default AppMenu;
