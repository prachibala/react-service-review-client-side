import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllMenuCard from "./AllMenuCard";

const AllMenu = () => {
    const [allMenus, SetAllMenus] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/menus")
            .then((res) => res.json())
            .then((data) => SetAllMenus(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <section className="py-6 sm:py-12  w-10/12 mx-auto dark:text-gray-100">
                <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3 ">
                    {allMenus.map((allMenu) => (
                        <article className="flex flex-col dark:text-gray-900  rounded-md shadow">
                            <Link
                                rel="noopener noreferrer"
                                href="#"
                                aria-label="Te nulla oportere reprimique his dolorum"
                            >
                                <img
                                    alt=""
                                    className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-md rounded-l-md"
                                    src={allMenu.img}
                                />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Te nulla oportere reprimique his dolorum"
                                ></Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="text-xs tracking-wider  hover:underline dark:text-lime-400"
                                >
                                    view details
                                </Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                    {allMenu.title}
                                </h3>
                                <p className="truncate ...">
                                    {allMenu.description}{" "}
                                </p>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>{allMenu.ratings} Ratings</span>
                                    <span>{allMenu.views}K views</span>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AllMenu;