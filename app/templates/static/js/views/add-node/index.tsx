import React from 'react';
import {Modal, Form, Input, Button } from "antd";
type Props = {
    isModalVisible: boolean,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const AddNodeModal = ({isModalVisible, setIsModalVisible}: Props): JSX.Element => {
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 18,
        },
      };
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return (
        <>
        <Modal title="Add Node" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
        footer={[
            <Button key="=cancel" onClick={() => handleCancel()}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={() => handleOk()}>
              Submit
            </Button>,
          ]}>
        <Form   {...layout}>
        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Hostname"
        name="hostname"
        rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Port Address"
        name="port"
        rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}
      >
        <Input />
      </Form.Item>
        </Form>
      </Modal>
        </>
    );
};
export default AddNodeModal;
