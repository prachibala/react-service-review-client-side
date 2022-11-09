import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
import NavTop from "../Header/NavTop";

const Main = () => {
    return (
        <div>
            <NavTop></NavTop>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
