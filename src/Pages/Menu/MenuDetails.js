import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { toast } from "react-toastify";

const MenuDetails = () => {
	const notify = () => {
		toast.success("Your Order Placed Successfully", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	const { img, title, description, price, _id } = useLoaderData();
	return (
		<>
			<section className=" dark:text-gray-800 w-9/12 mx-auto ">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src={img}
							alt=""
							className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
						/>
					</div>
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-5xl">
							{title}
						</h1>
						<p className="mt-6 mb-1 text-lg sm:mb-6">
							<small>{description}</small>
						</p>
						<p className="mt-2  text-lg sm:mb-12 text-error font-semibold">
							Price : ${price}
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<button
								onClick={notify}
								className="btn btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md"
							>
								Order Now
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className=" ">
				<Review menuId={_id} menuImg={img} menuName={title}></Review>
			</section>
		</>
	);
};

export default MenuDetails;
