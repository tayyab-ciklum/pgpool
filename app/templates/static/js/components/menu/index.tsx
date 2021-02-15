import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { HomeOutlined, SettingOutlined, ToolOutlined, LaptopOutlined, GoldOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../../utils/constants';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getClusters } from '../../redux-sagas/app.action';
import { selectClusters } from '../../redux-sagas/app.selector';
const { SubMenu } = Menu;
type Props = {
    collapsed: boolean;
    toggle: () => void;
};
const AppMenu = ({ collapsed, toggle }: Props): JSX.Element => {
    const History = useHistory();
    const dispatch = useDispatch();
    const clustersInfo = useSelector(
          selectClusters,
          shallowEqual
        ) as any;
      useEffect(() => {
          if(clustersInfo.length == 0)
          dispatch(getClusters());
        },[clustersInfo]);
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
                 {clustersInfo.length != 0 ?
                clustersInfo.map((cluster: any) => cluster.nodes.map((node: any) => {
                    return (<SubMenu key={"node" + cluster.id + node.id} icon={<GoldOutlined />} title={"Node" + node.id}>
                    <Menu.Item key="sub1" icon={<LaptopOutlined />}>
                        Node status
                    </Menu.Item>
                    <Menu.Item key="sub2" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </SubMenu>)
                })): null}
            </Menu>
        </Sider>
    );
};
export default AppMenu;
