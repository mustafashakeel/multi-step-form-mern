import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstStep from '../components/FirstStep';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Routes>
                <Route component={FirstStep} path="/" exact={true} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;