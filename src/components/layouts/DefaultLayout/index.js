import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SettingPanel from '../Setting-panel';
import Sidebar from '../Sidebar';

function DefaultLayout({ children, props }) {
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-scroller page-body-wrapper">
                <SettingPanel />
                <Sidebar />
                <div className="main-panel">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
