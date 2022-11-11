import React, { useState, useEffect } from "react";
import AddReview from "./AddReview";
import Loading from "../../Loader/Loading";

const Review = ({ menuId, menuImg, menuName }) => {
	const [loading, setLoading] = useState(true);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_server_url}/reviews-by-menu/${menuId}`)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, [menuId]);

	const handleSetReview = (data) => {
		const addReview = [...reviews, data];
		setReviews(addReview);
	};

	return (
		<div>
			<section className="p-6 dark:text-gray-800  w-9/12 mx-auto ">
				<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2">
					{loading ? (
						<Loading />
					) : reviews.length > 0 ? (
						<div className="scrollbar-thin scrollbar-thumb-lime-500 scrollbar-track-lime-200 h-500 overflow-auto container flex flex-col w-full max-w-lg p-6 mx-auto divide-y dark:bg-lime-100 rounded-md divide-lime-500  dark:text-gray-800">
							{reviews.map((review) => (
								<div key={review._id}>
									<div className="flex justify-between  p-4">
										<div className="flex space-x-4 items-center">
											<div>
												<img
													src={
														review.reviewBy.userImg
													}
													alt=""
													className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
												/>
											</div>
											<h4 className="font-bold text-lg dark:text-error">
												{review.reviewBy.userName}
											</h4>
										</div>
										<div className="flex items-center space-x-2 dark:text-yellow-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												className="w-5 h-5 fill-current"
											>
												<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
											</svg>
											<span className="text-xl font-bold">
												{review.rating}
											</span>
										</div>
									</div>
									<div className="px-4 pb-2 text-left text-md dark:text-gray-600">
										{review.reviewText}
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y dark:bg-lime-100 rounded-md divide-gray-700  dark:text-gray-800">
							<p>Could not found any review for this menu</p>
						</div>
					)}

					<AddReview
						menuId={menuId}
						menuName={menuName}
						menuImg={menuImg}
						handleSetReview={handleSetReview}
					></AddReview>
				</div>
			</section>
		</div>
	);
};

export default Review;
