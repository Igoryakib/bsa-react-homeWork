import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";

import routes from "../utils/routes";
import '../css/styles.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const RegisterPage = React.lazy(() => import('../pages/Register_LoginPages/RegisterPage' /* webpackChunkName: "Register-page" */));
const LoginPage = React.lazy(() => import('../pages/Register_LoginPages/LoginPage' /* webpackChunkName: "Login-page" */));
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */))
const TripDetailPAge = React.lazy(() => import('../pages/TripDetailPage/TripDetailPage' /* webpackChunkName: "TripDetail-page" */))
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "NotFound-page" */))
const BookingsPage = React.lazy(() => import('../pages/BookingsPage/BookingsPage' /* webpackChunkName: "Bookings-page" */))


const App = () => {
    return(
        <>
        <Header/>
        <Suspense fallback={<div className="loader"></div>}>
        <Routes>
            <Route path={routes.registerPage} element={<RegisterPage/>}/>
            <Route path={routes.loginPage} element={<LoginPage/>}/>
            <Route path={routes.homePage} element={<HomePage/>}/>
            <Route path={routes.tripPage} element={<TripDetailPAge/>}/>
            <Route path={routes.bookingsPage} element={<BookingsPage/>}/>
            <Route path={routes.notFoundPage} element={<NotFoundPage/>}/>
        </Routes>
        </Suspense>
        <Footer/>
        </>
    );
};

export default App;