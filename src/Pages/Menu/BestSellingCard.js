import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const BestSellingCard = ({ menu }) => {
    const { title, img, totalRatingsCount, description, ratings, _id } = menu;

    return (
        <article className="flex flex-col dark:text-gray-900 shadow-2xl rounded-md">
            <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
            >
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img
                            src={img}
                            style={{ objectFit: "cover" }}
                            alt=""
                            className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-md rounded-l-md"
                        />
                    </PhotoView>
                </PhotoProvider>
            </Link>
            <div className="flex flex-col flex-1 p-6">
                <Link
                    to="/"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wider  hover:underline dark:text-error"
                >
                    Snack Box
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {title}
                </h3>
                <p className="truncate ...">{description} </p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span className="flex">{ratings.toFixed(2)}</span>
                    <span>Based on {totalRatingsCount} people</span>
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link
                        to={`/menus/${_id}`}
                        className="btn btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BestSellingCard;
