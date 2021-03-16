import React from 'react';
import { Tabs } from 'antd';
import { nodesInfo } from '../../config/nodesConfig';
import {useTranslation} from 'react-i18next';
const { TabPane } = Tabs;
const NodeTabs = () => {
  const {t} = useTranslation();
  const tabs = [];
  Object.values(nodesInfo).map((node) => tabs.push(<TabPane tab={t(node.name)} key={node.key}>{node.Component}</TabPane>));
  return (
<Tabs defaultActiveKey="1">
   {tabs}
  </Tabs>
  );
}
export default NodeTabs;
