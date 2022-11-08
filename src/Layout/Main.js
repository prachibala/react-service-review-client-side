import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Header/Nav";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
