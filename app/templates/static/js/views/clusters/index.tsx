import React from 'react';
import { Table, Button } from "antd";
import { selectClusters } from '../../redux-sagas/app.selector';
import { shallowEqual, useSelector } from 'react-redux';
import moment from 'moment';
import { DATE_FORMAT, RouteNames } from '../../utils/constants';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
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
      dataIndex: 'nodes',
    },
    {
        title: 'Date of creation',
        dataIndex: 'createdAt',
      },
  ];
const Clusters = () => {
    const History = useHistory();
    const clustersInfo = useSelector(
        selectClusters,
        shallowEqual
      ) as any;
    const data : object[] = [];
    console.log('filter', clustersInfo.filter((cluster: any) => cluster.id == 1 ));
    clustersInfo.map((cluster: any) => data.push( {
        key: cluster.id,
        name: 'Cluster ' +  cluster.id,
        pcpHostname: cluster.pcpHostname,
        createdAt: moment(cluster.createdAt).format(DATE_FORMAT),
        nodes: cluster.nodes.length
    }));
    return (
        <div>
        <Button type="primary" style={{float: 'right', marginBottom: '10px'}} icon={<PlusOutlined />}>Add Cluster </Button>
        <Table
         onRow={() => {
            return {
              onClick: () => {
              () =>  History.push(RouteNames.AdminSettings.path);
              },
            };
          }}
         columns={columns} dataSource={...data} size="middle"/>
        </div>
    )
}
export default Clusters;