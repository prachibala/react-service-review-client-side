import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../../Loader/Loading";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllMenu = () => {
    const [loading, setLoading] = useState(true);

    UseTitle("Menu");
    const [allMenus, SetAllMenus] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_server_url}/menus`)
            .then((res) => res.json())
            .then((data) => {
                SetAllMenus(data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <section className="py-6 sm:py-12  w-10/12 mx-auto dark:text-gray-100">
                {loading ? (
                    <Loading />
                ) : allMenus?.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3 ">
                        {allMenus.map((allMenu) => (
                            <article
                                className="flex flex-col dark:text-gray-900  rounded-md shadow"
                                key={allMenu._id}
                            >
                                <Link
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Te nulla oportere reprimique his dolorum"
                                >
                                    <PhotoProvider>
                                        <PhotoView src={allMenu.img}>
                                            <img
                                                alt=""
                                                className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-md rounded-l-md"
                                                src={allMenu.img}
                                            />
                                        </PhotoView>
                                    </PhotoProvider>
                                </Link>
                                <div className="flex flex-col flex-1 p-6">
                                    <Link
                                        rel="noopener noreferrer"
                                        href="#"
                                        aria-label="Te nulla oportere reprimique his dolorum"
                                    ></Link>
                                    <Link
                                        to="/"
                                        rel="noopener noreferrer"
                                        className="text-xs tracking-wider  hover:underline dark:text-error"
                                    >
                                        Snack Box
                                    </Link>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                        {allMenu.title}
                                    </h3>
                                    <p className="truncate ...">
                                        {allMenu.description}{" "}
                                    </p>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>
                                            {allMenu.ratings.toFixed(2)} Ratings
                                        </span>
                                        <span>
                                            Based on {allMenu.totalRatingsCount}{" "}
                                            people
                                        </span>
                                    </div>
                                    <div className="card-actions justify-end mt-4">
                                        <Link
                                            to={`/menus/${allMenu._id}`}
                                            className="btn btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <h4 className="text-center text-lg text-error">
                        Could not found any Menus
                    </h4>
                )}
            </section>
        </div>
    );
};

export default AllMenu;
