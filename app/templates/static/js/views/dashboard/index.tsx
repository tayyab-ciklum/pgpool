import React, { useState } from 'react';
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import AddNodeModal from '../add-node';
const Dashboard = (): JSX.Element => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setIsModalVisible(!isModalVisible)} style={{float: 'right', marginBottom: '10px'}} icon={<PlusOutlined />}>Add Node </Button>
            <AddNodeModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
        
        </>
    );
};
export default Dashboard;
