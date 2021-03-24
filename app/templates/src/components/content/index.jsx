import React, { useEffect, useState } from 'react';
import { Select,  Layout, notification, Progress } from 'antd';
import Routes from '../../routes';
import { dropDownsData, LANGUAGE } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
const { Content } = Layout;
const AppContent = ()=> {
    const { t, i18n } = useTranslation();
    const [progress, setProgress] = useState(0);
    setTimeout(() => {
        if(progress < 95){
            setProgress(progress+3);
        }
    }, 3000);
    const { Option } = Select;
    let languageDropdown = [];
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    const menuItems = Object.values(dropDownsData).find((menu) => menu.key === 'Language')?.value;
    menuItems.map(langauge => languageDropdown.push(<Option key={langauge} value={langauge}>{t(`${langauge}`)}</Option>));
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
            }}
        >
      <Select defaultValue={LANGUAGE} style={{float:"right", marginLeft:'2px'}} onChange={(value) => {changeLanguage(value)}}>
       {languageDropdown}
      </Select>
      <div style={{width:'25%', padding:'5px',position: 'fixed', bottom: '0', right:'0'}}>
      <Progress percent={progress} size="small" status="active" />
      </div>
            <Routes />
        </Content>
    );
};
export default AppContent;
