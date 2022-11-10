import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BestSellingCard from "./BestSellingCard";

const BestSellingMenu = () => {
    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_server_url}/top-rated-menus`)
            .then((res) => res.json())
            .then((data) => setTopRated(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className="py-6 sm:py-12 0 text-gray-800  w-10/12 mx-auto ">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">
                        Our <span className="text-lime-400">Top</span> Rated
                        Menu
                    </h2>
                    <p className="font-serif text-sm dark:text-gray-400">
                        Qualisque erroribus usu at, duo te agam soluta mucius.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {topRated.map((menu) => (
                        <BestSellingCard
                            key={menu._id}
                            menu={menu}
                        ></BestSellingCard>
                    ))}
                </div>
            </div>
            <div className="card-actions justify-center mt-4">
                <Link
                    to="/menus"
                    className="btn btn-ghost btn-outline dark:text-lime-400 sm:btn-sm md:btn-md lg:btn-md"
                >
                    Show All Menu
                </Link>
            </div>
        </section>
    );
};

export default BestSellingMenu;
