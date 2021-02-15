import React from 'react';
import { Layout } from 'antd';
import Routes from '../../routes';
import popUp from '../popup';
import { selectError, selectSuccess } from '../../redux-sagas/app.selector';
import { shallowEqual, useSelector } from 'react-redux';
const { Content } = Layout;
const AppContent = (): JSX.Element => {
    const error = useSelector(
        selectError,
        shallowEqual
      ) as any;
      const success = useSelector(
        selectSuccess,
        shallowEqual
      ) as any;
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
            }}
        >
            <Routes />
            {error ? popUp('error', 'Error', 'Unexpected Error!'): null}
            {success ? popUp('success','Success', 'Request handled Successfully'): null}
        </Content>
    );
};
export default AppContent;
