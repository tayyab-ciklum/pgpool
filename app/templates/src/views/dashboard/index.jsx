import React, { useState } from 'react';
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import AddNodeModal from '../add-node';
import {useTranslation} from 'react-i18next';
const Dashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {t} = useTranslation();
    return (
        <div>
            <Button type="primary" onClick={() => setIsModalVisible(!isModalVisible)} style={{float: 'right', marginBottom: '10px'}} icon={<PlusOutlined />}> {t('AddNode')}</Button>
            <AddNodeModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
        </div>
    );
};
export default Dashboard;
