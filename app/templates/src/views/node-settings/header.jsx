import React from 'react';
import { Input, Space, Button} from 'antd';
const { Search } = Input;
const NodeSettingsHeader = ({reference}) => {
    return (
            <Space>
                    <Search placeholder="input search text" enterButton />
                    <Button type="primary" htmlType="submit" form={reference}>
                        Update
                    </Button>
                    <Button>Cancel</Button>
                </Space>
    )
}
export default NodeSettingsHeader;