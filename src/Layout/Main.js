import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Header/Nav";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
