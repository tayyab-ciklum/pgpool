import React, { useEffect } from "react";
import { Collapse, Form, Space } from 'antd';
import { nodeSettingsConfig } from "../../config/nodeSettingsConfig";
import AdminSettings from "../setting-groups/admin-settings";
import NodeSettingsHeader from "./header";
import CustomSettings from "../setting-groups/custom-settings";
import {useLocation} from 'react-router-dom';
const { Panel } = Collapse;
const layout = {
    labelCol: {
        span: 9,
    },
    wrapperCol: {
        span: 14,
    },
};
const NodeSettings = () => {
    const location = useLocation();
    const [formRef] = Form.useForm(); 
    const UIcomponents = {
        "Admin Settings": AdminSettings,
        "Custom Settings": CustomSettings
    }; 
    const nodeId = location.state;
    const panels = [];
    let formDetails = {};
    Object.values(nodeSettingsConfig).map((node) => {
        const SpecificSection = UIcomponents[node.name];
        formDetails = {...formDetails , ...node.settings};
        panels.push(<Panel header={node.name}
        key={node.key}><SpecificSection/></Panel>)});
        useEffect (() => {
            formRef.setFieldsValue(formDetails);
            //TODO GET call for setting of each Node
            console.log('Put the Get call for every node', nodeId);
        },[location, formDetails, formRef, nodeId]);
        const handleSubmit = () => {
            console.log('inside main form', formRef.getFieldsValue());
        };
    return (
        <Space direction='vertical' style={{width:'inherit'}}>
            <NodeSettingsHeader reference={"settingsForm"} />
        <Form
        {...layout}
        id="settingsForm"
        form={formRef}
        onFinish={handleSubmit}
    >
            <Collapse defaultActiveKey={['1']}>
                {panels}
            </Collapse>
            </Form>
            </Space>
    )
}
export default NodeSettings;