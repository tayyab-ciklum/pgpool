import React from 'react';
import { Select,  Layout } from 'antd';
import Routes from '../../routes';
import { dropDownsData, LANGUAGE } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
const { Content } = Layout;
const AppContent = ()=> {
    const { t, i18n } = useTranslation();
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
            <Routes />
        </Content>
    );
};
export default AppContent;
