import React, { useMemo } from 'react';
import { Form, Input, Button, Row, Col, Space, Switch, Select } from 'antd';
import { setConfig, updateConfig } from '../../redux-sagas/app.action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { dropDownsData } from '../../utils/constants';
import { selectClusters } from '../../redux-sagas/app.selector';
import { useHistory } from 'react-router-dom';
const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 14,
    },
};
const AdminSettings = (): JSX.Element => {
    const [formRef] = Form.useForm();
    const History = useHistory();
    const dispatch = useDispatch();
    const clustersInfo = useSelector(
        selectClusters,
        shallowEqual
      ) as any;
    useMemo(() => {
     formRef.setFieldsValue(History.location.state);
      }, [History.location.state]);    
    const getOptions = (type: string) => {
        let res: JSX.Element[] = [];
        const option = Object.values(dropDownsData).find((menu) => menu.key === type)?.value;
        if (option)
            res = Object.values(option).map((value) => (
                <Select.Option key={value} value={value}>
                    {value}
                </Select.Option>
            ));
        return res;
    };
    const handleSubmit = () => {
        if(clustersInfo.length == 0)
        dispatch(setConfig(formRef.getFieldsValue()));
        else
        dispatch(updateConfig(formRef.getFieldsValue(), clustersInfo[0].id));
    };
    return (
        <div>
            <h3>PG Pool Admin Settings</h3>
            <Form
                colon={false}
                initialValues={{ pcpRefreshTime: 1, shutdownMode: 'Smart', language: 'English', debugMode: false, clearQueryCache: false, demonMode: false  }}
                {...layout}
                form={formRef}
                onFinish={handleSubmit}
            >
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
                <Space style={{ marginLeft: '42%' }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button>Cancel</Button>
                </Space>
            </Form>
        </div>
    );
};
export default AdminSettings;
