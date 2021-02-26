import React from 'react';
import { Tabs } from 'antd';
import { nodesInfo } from '../../config/nodesConfig';
const { TabPane } = Tabs;
const NodeTabs = () => {
  const tabs: any = [];
  Object.values(nodesInfo).map((node) => tabs.push(<TabPane tab={node.name} key={node.key}>{node.Component}</TabPane>));
  return (
<Tabs defaultActiveKey="1">
   {tabs}
  </Tabs>
  );
}
export default NodeTabs;
