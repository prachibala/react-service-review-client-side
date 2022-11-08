import React from "react";
import Hero from "../Header/Hero";
import UseTitle from "../Hooks/UseTitle";
import BestSellingMenu from "../Pages/Menu/BestSellingMenu";

const Home = () => {
    UseTitle("Home");
    return (
        <>
            <Hero></Hero>
            <BestSellingMenu></BestSellingMenu>
        </>
    );
};

export default Home;
