import React, { useState, Suspense } from 'react';
import './App.css';
import { Layout } from 'antd';
import AppMenu from './components/menu';
import AppHeader from './components/header';
import AppContent from './components/content';
import './i18n';
function App() {
  const [collapsed, changeCollapsed] = useState(false);
    const toggle = () => {
        changeCollapsed(!collapsed);
    };
  return (
    <div id="content">
       <Suspense fallback={null}>
    <Layout>
    <AppMenu collapsed={collapsed} toggle={toggle} />
        <Layout className="site-layout">
            <AppHeader />
            <AppContent />
        </Layout>
    </Layout>
    </Suspense>
</div>
  );
}

export default App;
