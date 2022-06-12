import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";

import routes from "../utils/routes";
import '../css/styles.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const RegisterPage = React.lazy(() => import('../pages/Register_LoginPages/RegisterPage' /* webpackChunkName: "register-page" */));
const LoginPage = React.lazy(() => import('../pages/Register_LoginPages/LoginPage' /* webpackChunkName: "login-page" */));
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */))

const App = () => {
    return(
        <>
        <Header/>
        <Suspense fallback={<h1>Loading ....</h1>}>
        <Routes>
            <Route path={routes.registerPage} element={<RegisterPage/>}/>
            <Route path={routes.loginPage} element={<LoginPage/>}/>
            <Route path={routes.homePage} element={<HomePage/>}/>
        </Routes>
        </Suspense>
        <Footer/>
        </>
    );
};

export default App;