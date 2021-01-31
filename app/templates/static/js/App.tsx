import React, { useState } from 'react';
import { Layout } from 'antd';
import './App.css';
import AppMenu from './components/menu';
import AppHeader from './components/header';
import AppContent from './components/content';
const App = (): JSX.Element => {
    const [collapsed, changeCollapsed] = useState<boolean>(false);
    const toggle = () => {
        changeCollapsed(!collapsed);
    };

    return (
        <div id="content">
            <Layout style={{ height: '100vh' }}>
                <AppMenu collapsed={collapsed} toggle={toggle} />
                <Layout className="site-layout">
                    <AppHeader />
                    <AppContent />
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
