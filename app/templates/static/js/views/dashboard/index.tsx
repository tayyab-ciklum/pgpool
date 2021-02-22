import React from 'react';
import {Button} from 'antd';
import { useTranslation } from 'react-i18next'
const Dashboard = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <p>{t("hello.label")}</p>
            <Button onClick={()=> i18n.changeLanguage('zh')}>Change language</Button>
        </>
    );
};
export default Dashboard;
