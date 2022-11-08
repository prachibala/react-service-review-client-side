import React from "react";
import { Link } from "react-router-dom";
import pic from "../../Images/favourites.png";

const BestSellingCard = ({ menu }) => {
    const { title, img, views, description, ratings } = menu;
    return (
        <article className="flex flex-col dark:text-gray-900 shadow-2xl rounded-md">
            <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
            >
                <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-md rounded-l-md"
                    src={img}
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
                    className="text-xs tracking-wider uppercase hover:underline dark:text-lime-400"
                >
                    snack Box
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {title}
                </h3>
                <p className="truncate ...">{description} </p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span className="flex">
                        {ratings}
                        <img src={pic} alt="" className="w-4 ml-1" />
                        <img src={pic} alt="" className="w-4" />
                        <img src={pic} alt="" className="w-4" />
                        <img src={pic} alt="" className="w-4" />
                        <img src={pic} alt="" className="w-4" />
                    </span>
                    <span>{views}K views</span>
                </div>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md">
                        Order Now
                    </button>
                </div>
            </div>
        </article>
    );
};

export default BestSellingCard;
