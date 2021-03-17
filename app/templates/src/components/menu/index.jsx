import React, { useEffect } from 'react';
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
    const nodesdisplayInfo = useSelector(
      nodes,
      shallowEqual
    );
  useEffect(() => {
      if(nodesdisplayInfo == null)
      dispatch(getNodes());
    },[nodesdisplayInfo, dispatch]);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1D" icon={<HomeOutlined />} onClick={() => History.push(RouteNames.Dashboard.path)}>
                    {t('Dashboard')}
                </Menu.Item>
                 {nodesdisplayInfo != null && nodesdisplayInfo.length > 0 ?
                nodesdisplayInfo.map((node) => {
                    return (
                        <Menu.Item key={node.id} icon={<ClusterOutlined />} onClick={() => History.push({
                            pathname: RouteNames.Nodes.path,
                            state: node.id
                        })}>
                      {node.name}
                    </Menu.Item> 
                    )
                }): null}
            </Menu>
        </Sider>
    );
};
export default AppMenu;