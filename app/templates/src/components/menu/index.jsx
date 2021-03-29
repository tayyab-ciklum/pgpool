import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ClusterOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import {getNodes} from '../../redux/nodes/nodes.action';
import {nodes} from '../../redux/nodes/nodes.selector';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
const { Sider } = Layout;
const AppMenu = ({ collapsed, toggle }) => {
    const History = useHistory();
    const dispatch =  useDispatch();
    const { t } = useTranslation();
    const [selectedTab, changeSelectedTab] = useState('0');
    const nodesdisplayInfo =useSelector(
      nodes,
      shallowEqual
    );
  useEffect(() => {
      if(History.location.state)
      changeSelectedTab(History.location.state);
      if(nodesdisplayInfo == null)
      dispatch(getNodes());
    },[nodesdisplayInfo, History.location.state, dispatch]);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[selectedTab.toString()]} defaultSelectedKeys={['0']}>
                <Menu.Item key="0" icon={<HomeOutlined />} onClick={() =>{
                     changeSelectedTab('0');
                     History.push(RouteNames.Dashboard.path)}}>
                    {t('Dashboard')}
                </Menu.Item>
                 {nodesdisplayInfo != null && nodesdisplayInfo.length > 0 ?
                nodesdisplayInfo.map((node) => {
                    return (
                        <Menu.Item key={node.id} icon={<ClusterOutlined />} onClick={() =>{ 
                            changeSelectedTab(node.id);
                            History.push({
                            pathname:`${RouteNames.Nodes.link}/${node.id}`,
                            state: node.id
                        })}}>
                      {node.name}
                    </Menu.Item> 
                    )
                }): null}
            </Menu>
        </Sider>
    );
};
export default AppMenu;