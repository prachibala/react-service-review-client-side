import React from "react";
import { Link } from "react-router-dom";
import pic from "../Images/animation_640_la7e7ed8.gif";
const Hero = () => {
	return (
		<div>
			<div className="home">
				<section className="text-gray-800">
					<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
						<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
							<h1 className="text-5xl font-bold leading-none sm:text-6xl">
								Eat well <br />
								<span className="dark:text-lime-400">
									Live{" "}
								</span>
								Simply Laugh Often
							</h1>
							<p className="mt-6 mb-8 text-lg sm:mb-12">
								Good Food, Good Life!
							</p>
							<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
								<Link
									rel="noopener noreferrer"
									to="/menus"
									className="px-8 py-3 text-lg font-semibold rounded dark:bg-lime-400 dark:text-gray-900"
								>
									View Menus
								</Link>
							</div>
						</div>
						<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
							<img
								src={pic}
								alt=""
								className="object-contain h-72 w-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Hero;
