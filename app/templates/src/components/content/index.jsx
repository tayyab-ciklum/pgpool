import React, { useEffect } from 'react';
import { Select,  Layout } from 'antd';
import Routes from '../../routes';
import { dropDownsData, LANGUAGE } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../progressBar';
import {nodeInProgress, error, success} from '../../redux/nodes/nodes.selector';
import { shallowEqual, useSelector } from 'react-redux';
import popUp from '../popup';
const { Content } = Layout;
const AppContent = () => {
    const { t, i18n } = useTranslation();
    let errorSelector = null;
    let successSelector = null;
    let requestSelector = null;
    const requestStatus = useSelector(
        nodeInProgress,
        shallowEqual
      );
    const errorStatus = useSelector(
        error,
        shallowEqual
      );
    const successStatus = useSelector(
        success,
        shallowEqual
      );
    useEffect(()=> {
      errorSelector =  errorStatus ? popUp('error', 'Error', 'Unexpected Error!'): null;
      successSelector = successStatus ? popUp('success','Success', 'Request handled Successfully'): null;
      requestSelector = requestStatus ?  <ProgressBar title ={t('AddingNode')} /> : null;

    },[errorStatus,successStatus, requestStatus ]);
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
      {requestSelector}
      {errorSelector}
      {successSelector}
            <Routes />
        </Content>
    );
};
export default AppContent;
