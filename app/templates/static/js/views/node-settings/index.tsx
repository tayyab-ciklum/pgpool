import React from "react";
import { Collapse } from 'antd';
import { nodeSettingsConfig } from "../../config/nodeSettingsConfig";

const { Panel } = Collapse;
const NodeSettings = () => {
    const panels: any = [];
    Object.values(nodeSettingsConfig).map((node) => panels.push(<Panel header={node.name} key={node.key}>{node.Component}</Panel>));
    return (
            <Collapse defaultActiveKey={['1']}>
                {panels}
            </Collapse>
    )
}
export default NodeSettings;