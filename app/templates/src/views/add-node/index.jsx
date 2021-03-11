import React from 'react';
import {Modal, Form, Input, Button } from "antd";
import { useTranslation } from 'react-i18next';
const AddNodeModal = ({isModalVisible, setIsModalVisible}) => {
  const { t } = useTranslation();
    const layout = {
        labelCol: {
          span: 7,
        },
        wrapperCol: {
          span: 16,
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
        <Modal title={t("AddNode")} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
        footer={[
            <Button key="cancel" onClick={() => handleCancel()}>
              {t('Cancel')}
            </Button>,
            <Button key="submit" type="primary" onClick={() => handleOk()}>
             { t('Submit')}
            </Button>,
          ]}>
        <Form   {...layout}>
        <Form.Item
        label= {t('Username')}
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
        label={t('Password')}
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
        label={t('Hostname')}
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
        label={t('PortAddress')}
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