import React, { useEffect } from 'react';
import { Table, Button } from "antd";
import { selectClusters, selectSuccess, selectUpdatedConfig } from '../../redux-sagas/app.selector';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { DATE_FORMAT, RouteNames } from '../../utils/constants';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { updateCluster } from '../../redux-sagas/app.action';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'HostName',
      dataIndex: 'pcpHostname',
    },
    {
      title: 'No of Nodes',
      dataIndex: 'nodeCount',
    },
    {
        title: 'Date of creation',
        dataIndex: 'createdAt',
      },
  ];
const Clusters = () => {
    const History = useHistory();
    const dispatch = useDispatch();
    const clustersInfo = useSelector(
        selectClusters,
        shallowEqual
      ) as any;
      const success = useSelector(
        selectSuccess,
        shallowEqual
      ) as any;
      const updateConfig = useSelector(
        selectUpdatedConfig,
        shallowEqual
      ) as any;
    useEffect(() => {
      if(updateConfig) {
        const clusters = clustersInfo.filter((cluster: any) => cluster.id != updateConfig.id);
        const updatedClusters = [...clusters , updateConfig];
        dispatch(updateCluster(updatedClusters));
        console.log('updated config', updatedClusters);
      }
    },[success])
    const data : object[] = [];
    clustersInfo.map((cluster: any) => data.push( {
      ...cluster,
        key: cluster.id,
        createdAt: moment(cluster.createdAt).format(DATE_FORMAT),
        nodeCount: cluster.nodes.length
    }));
    return (
        <div>
        <Button type="primary"
        onClick={() => History.push(RouteNames.Nodes.path)}
         style={{float: 'right', marginBottom: '10px'}} icon={<PlusOutlined />}>Add Cluster </Button>
        <Table
         onRow={(record) => {
            return {
              onClick: () => {
              History.push({
               pathname: RouteNames.AdminSettings.path,
               state: record});
              },
            };
          }}
         columns={columns} dataSource={...data} size="middle"/>
        </div>
    )
}
export default Clusters;