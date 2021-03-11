import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ClusterOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
const { Sider } = Layout;
const AppMenu = ({ collapsed, toggle }) => {
    const History = useHistory();
    const { t } = useTranslation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const nodesInfo = [
        {
          "id": 1,
          "name": "updated name",
          "configFile": "/usr/local/etc/pgpool.conf",
          "passwordFile": "/usr/local/etc/pcp.conf",
          "logFile": "/tmp/pgpool.log",
          "pgPoolCommand": "/usr/local/bin/pgpool",
          "pcpClientDirectory": "/usr/local/bin",
          "pcpHostname": "localhost",
          "pcpRefreshTime": 7,
          "clearQueryCache": true,
          "demonMode": true,
          "debugMode": true,
          "shutdownMode": "fast",
          "language": "en",
          "createdAt": "2021-02-15T12:33:44",
          "updatedAt": "2021-02-17T09:20:08",
          "nodes": [
            {
              "id": 1,
              "cluster_id": 1,
              "ip_address": "127.0.0.1",
              "port": 4565,
              "status": "up",
              "backendSocketDir": "/tmp",
              "backendHostname": "127.0.0.1",
              "backendPort": 8080,
              "backendWeight": 5,
              "pcpPort": 443,
              "pcpSocketDir": "/tmp",
              "pcpTimeout": 300,
              "logDirectory": "/default",
              "logConnection": true,
              "printTimeStamp": true,
              "logHostname": true,
              "replicationStrict": "default",
              "replicationStopOnMismatch": false,
              "resetQueryList": ";",
              "healthCheckTimeout": 200,
              "healthCheckPeriod": 300,
              "healthCheckUser": "admin",
              "recoveryUser": "admin",
              "recoveryPassword": "admin",
              "recoveryFirstStageCommand": "$PGDATA",
              "recoverySecondStageCommand": "$PGDATA_",
              "recoveryTimeout": 60,
              "systemDatabaseHostname": "127.0.0.1",
              "systemDatabasePort": 8080,
              "systemDatabaseName": "PG",
              "systemDatabaseSchema": "DB NAME",
              "systemDatabaseUser": "admin",
              "systemDatabasePassword": "admin",
              "createdAt": "2021-02-18T09:01:31",
              "updatedAt": "2021-02-18T09:01:31"
            },
            {
              "id": 2,
              "cluster_id": 1,
              "ip_address": "127.0.0.1",
              "port": 4565,
              "status": "up",
              "backendSocketDir": "/tmp",
              "backendHostname": "127.0.0.1",
              "backendPort": 8080,
              "backendWeight": 5,
              "pcpPort": 443,
              "pcpSocketDir": "/tmp",
              "pcpTimeout": 300,
              "logDirectory": "/default",
              "logConnection": true,
              "printTimeStamp": true,
              "logHostname": true,
              "replicationStrict": "default",
              "replicationStopOnMismatch": false,
              "resetQueryList": ";",
              "healthCheckTimeout": 200,
              "healthCheckPeriod": 300,
              "healthCheckUser": "admin",
              "recoveryUser": "admin",
              "recoveryPassword": "admin",
              "recoveryFirstStageCommand": "$PGDATA",
              "recoverySecondStageCommand": "$PGDATA_",
              "recoveryTimeout": 60,
              "systemDatabaseHostname": "127.0.0.1",
              "systemDatabasePort": 8080,
              "systemDatabaseName": "PG",
              "systemDatabaseSchema": "DB NAME",
              "systemDatabaseUser": "admin",
              "systemDatabasePassword": "admin",
              "createdAt": "2021-02-18T09:11:26",
              "updatedAt": "2021-02-18T09:11:26"
            }
          ]
        },
        {
          "id": 2,
          "name": "Cluster 2",
          "configFile": "/usr/local/etc/pgpool.conf",
          "passwordFile": "/usr/local",
          "logFile": "/tmp/pgpool/cbn.log",
          "pgPoolCommand": "/usr/local/bin/pgpool",
          "pcpClientDirectory": "/usr/local/bin",
          "pcpHostname": "localhost2",
          "pcpRefreshTime": 1,
          "clearQueryCache": false,
          "demonMode": true,
          "debugMode": true,
          "shutdownMode": "Smart",
          "language": "English",
          "createdAt": "2021-02-15T13:09:05",
          "updatedAt": "2021-02-15T13:09:05",
          "nodes": [
            {
              "id": 3,
              "cluster_id": 2,
              "ip_address": "127.0.0.1",
              "port": 4565,
              "status": "up",
              "backendSocketDir": "/tmp",
              "backendHostname": "127.0.0.1",
              "backendPort": 8080,
              "backendWeight": 5,
              "pcpPort": 443,
              "pcpSocketDir": "/tmp",
              "pcpTimeout": 300,
              "logDirectory": "/default",
              "logConnection": true,
              "printTimeStamp": true,
              "logHostname": true,
              "replicationStrict": "default",
              "replicationStopOnMismatch": false,
              "resetQueryList": ";",
              "healthCheckTimeout": 200,
              "healthCheckPeriod": 300,
              "healthCheckUser": "admin",
              "recoveryUser": "admin",
              "recoveryPassword": "admin",
              "recoveryFirstStageCommand": "$PGDATA",
              "recoverySecondStageCommand": "$PGDATA_",
              "recoveryTimeout": 60,
              "systemDatabaseHostname": "127.0.0.1",
              "systemDatabasePort": 8080,
              "systemDatabaseName": "PG",
              "systemDatabaseSchema": "DB NAME",
              "systemDatabaseUser": "admin",
              "systemDatabasePassword": "admin",
              "createdAt": "2021-02-18T09:58:51",
              "updatedAt": "2021-02-18T09:58:51"
            }
          ]
        },
        {
          "id": 3,
          "name": "fake cluster ",
          "configFile": "/user/lib",
          "passwordFile": "/log/admin",
          "logFile": "/use4r",
          "pgPoolCommand": "/user/cmd",
          "pcpClientDirectory": "/dir",
          "pcpHostname": "localhost",
          "pcpRefreshTime": 1,
          "clearQueryCache": true,
          "demonMode": false,
          "debugMode": false,
          "shutdownMode": "Smart",
          "language": "English",
          "createdAt": "2021-02-16T07:04:49",
          "updatedAt": "2021-02-16T07:04:49",
          "nodes": []
        },
        {
          "id": 4,
          "name": "angularapp",
          "configFile": "/user/lib",
          "passwordFile": "/log/admin",
          "logFile": "/use4r",
          "pgPoolCommand": "/user/cmd",
          "pcpClientDirectory": "/dir",
          "pcpHostname": "localhost",
          "pcpRefreshTime": 1,
          "clearQueryCache": false,
          "demonMode": false,
          "debugMode": false,
          "shutdownMode": "Smart",
          "language": "English",
          "createdAt": "2021-02-16T07:09:48",
          "updatedAt": "2021-02-16T07:09:48",
          "nodes": []
        },
        {
          "id": 5,
          "name": "react app",
          "configFile": "/user/lib",
          "passwordFile": "/log/admin",
          "logFile": "/use4rg",
          "pgPoolCommand": "/user/cmd",
          "pcpClientDirectory": "/dir",
          "pcpHostname": "localhostq",
          "pcpRefreshTime": 1,
          "clearQueryCache": false,
          "demonMode": false,
          "debugMode": false,
          "shutdownMode": "Smart",
          "language": "English",
          "createdAt": "2021-02-17T09:07:37",
          "updatedAt": "2021-02-17T09:07:37",
          "nodes": []
        }
      ];
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => History.push(RouteNames.Dashboard.path)}>
                    {t('Dashboard')}
                </Menu.Item>
                 {nodesInfo != null && nodesInfo.length > 0 ?
                nodesInfo.map((cluster) => cluster.nodes.map((node) => {
                    return (
                        <Menu.Item key={cluster.id + node.id} icon={<ClusterOutlined />} onClick={() => History.push({
                            pathname: RouteNames.Nodes.path,
                            state: cluster
                        })}>
                      {t('Node') + node.id}
                    </Menu.Item> 
                    )
                })): null}
            </Menu>
        </Sider>
    );
};
export default AppMenu;