import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DefaultLayout from './components/layouts/DefaultLayout';
import * as routes from './routes';
import Login from '~/page/Login';

function App() {
    const user = useSelector((state) => state.auth.login?.currentUser);

    return (
        <>
            <Routes>
                {user ? (
                    routes.publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })
                ) : (
                    <Route path="/" element={<Login />} />
                )}
            </Routes>
        </>
    );
}

export default App;
