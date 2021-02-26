import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { HomeOutlined, ClusterOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../../utils/constants';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getClusters } from '../../redux-sagas/app.action';
import { selectClusters } from '../../redux-sagas/app.selector';
type Props = {
    collapsed: boolean;
    toggle: () => void;
};
const AppMenu = ({ collapsed, toggle }: Props): JSX.Element => {
    const History = useHistory();
    const dispatch = useDispatch();
    const nodesInfo = useSelector(
          selectClusters,
          shallowEqual
        ) as any;
      useMemo(() => {
          if(nodesInfo == null)
          dispatch(getClusters());
        },[nodesInfo]);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => History.push(RouteNames.Dashboard.path)}>
                    Dashboard
                </Menu.Item>
                 {nodesInfo != null && nodesInfo.length > 0 ?
                nodesInfo.map((cluster: any) => cluster.nodes.map((node: any) => {
                    return (
                        <Menu.Item key={cluster.id + node.id} icon={<ClusterOutlined />} onClick={() => History.push({
                            pathname: RouteNames.Nodes.path,
                            state: cluster
                        })}>
                        {"Node" + node.id}
                    </Menu.Item> 
                    )
                })): null}
            </Menu>
        </Sider>
    );
};
export default AppMenu;