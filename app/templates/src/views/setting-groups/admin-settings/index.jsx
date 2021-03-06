import React from 'react';
import { Form, Input, Row, Col, Switch, Select } from 'antd';
import { dropDownsData } from '../../../utils/constants';
const AdminSettings = () => {
    const getOptions = (type) => {
        let res = [];
        const option = Object.values(dropDownsData).find((menu) => menu.key === type)?.value;
        if (option)
            res = Object.values(option).map((value) => (
                <Select.Option key={value} value={value}>
                    {value}
                </Select.Option>
            ));
        return res;
    };
    return (
        <div>
            <h3>PG Pool Admin Settings</h3>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            name="configFile"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    message: 'Required',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            label="PgPool.conf File"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="pgPoolCommand"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    message: 'Required',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            label="PgPool Command"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="pcpClientDirectory"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    message: 'Required',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            label="PCP Directory"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: false,
                                    pattern: new RegExp('^[0-9]*$'),
                                    message: 'Please select a valid number',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            name="pcpRefreshTime"
                            label="Refresh Time"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="passwordFile"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    message: 'Required',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            label="PgPool Password File"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="logFile"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    message: 'Required',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            label="PgPool Log File"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="pcpHostname"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    message: 'Required',
                                },
                                {
                                    pattern: RegExp(/^\S*$/),
                                    message: 'Space not allowed',
                                },
                            ]}
                            label="PCP Hostname"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="clearQueryCache"
                    label="Clears query cache(-c)"
                    rules={[
                        {
                            type: 'boolean',
                        },
                    ]}
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Form.Item
                    name="demonMode"
                    rules={[
                        {
                            type: 'boolean',
                        },
                    ]}
                    label="Don't run in demon mode(-n)"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Form.Item
                    name="debugMode"
                    rules={[
                        {
                            type: 'boolean',
                        },
                    ]}
                    label="Debug mode(-d)"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            name="shutdownMode"
                            label="Stop Mode (-m)"
                            rules={[
                                {
                                    type: 'string',
                                },
                            ]}
                        >
                            <Select>{getOptions('StopMode')}</Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            name="language"
                            label="Language"
                            rules={[
                                {
                                    type: 'string',
                                },
                            ]}
                        >
                            <Select>{getOptions('Language')}</Select>
                        </Form.Item>
                    </Col>
                </Row>
        </div>
    );
};
export default AdminSettings;
