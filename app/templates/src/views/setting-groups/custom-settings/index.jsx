import React from 'react';
import { Form, Input, Row, Col } from 'antd';
const CustomSettings = () => {
    return (
        <div>
            <h3>PG Pool Custom Settings</h3>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            name="customName"
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
                            label="Name"
                        >
                            <Input />
                        </Form.Item>
                        </Col>
                        </Row>
        </div>
    );
};
export default CustomSettings;
