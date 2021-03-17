import React from 'react';
import { Input, Space, Button} from 'antd';
import {useTranslation} from 'react-i18next';
const { Search } = Input;
const NodeSettingsHeader = ({reference}) => {
    const {t} = useTranslation();
    return (
            <Space>
                    <Search enterButton />
                    <Button type="primary" htmlType="submit" form={reference}>
                        {t('Update')}
                    </Button>
                    <Button>{t('Cancel')}</Button>
                </Space>
    )
}
export default NodeSettingsHeader;