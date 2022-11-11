import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddReview = ({ menuId, menuImg, menuName, handleSetReview }) => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	const [rating, setRating] = useState(1);
	const [hover, setHover] = useState(1);

	const notify = () => {
		toast.success("Review Has Been Posted Successfully", {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const reviewText = form.reviewText.value;
		const userId = user.uid;
		const userImg = user.photoURL;
		const userName = user.displayName;
		const review = {
			reviewBy: { userId, userImg, userName },
			reviewText,
			menu: { menuName, menuId, menuImg },
			rating,
		};

		fetch(`${process.env.REACT_APP_server_url}/add-review`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				e.target.reset();
				handleSetReview({ ...review, _id: data.insertedId });
				notify();
			})
			.catch((err) => console.log(err));
	};

	const handleBtn = () => {
		navigate("/menus");
	};

	return (
		<div>
			<div className="w-full">
				<div className="flex h-500 flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-lime-100 dark:text-gray-800">
					<div className="flex flex-col items-center w-full">
						<h2 className="text-3xl font-semibold text-center">
							Your opinion matters!
						</h2>
						{user ? (
							<>
								<div className="flex flex-col items-center py-6 space-y-3">
									<span className="text-center ">
										How was your experience?
									</span>
									<div className="flex space-x-3">
										{[...Array(5)].map((star, index) => {
											index += 1;
											return (
												<button
													key={index}
													type="button"
													title="Rate 5 stars"
													aria-label="Rate 5 stars"
													onClick={() =>
														setRating(index)
													}
													onMouseEnter={() =>
														setHover(index)
													}
													onMouseLeave={() =>
														setHover(rating)
													}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className={
															index <=
															(hover || rating)
																? "w-10 h-10 dark:text-yellow-500"
																: "w-10 h-10 dark:text-nutral"
														}
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												</button>
											);
										})}
									</div>
								</div>
								<form
									onSubmit={handleSubmit}
									className="flex flex-col w-full"
								>
									<textarea
										rows="3"
										placeholder="Write your review..."
										name="reviewText"
										className="p-4 rounded-md resize-none dark:text-gray-800 "
									></textarea>

									<button
										type="submit"
										className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-lime-400"
									>
										Leave feedback
									</button>
								</form>
							</>
						) : (
							<>
								<h4 className="text-lg my-5">
									Login Now to Submit your Review.
								</h4>
								<Link
									to="/login"
									className="btn font-semibold btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md my-5"
								>
									Sign In
								</Link>
							</>
						)}
					</div>
					<div className="flex items-center justify-center">
						<button
							onClick={handleBtn}
							className="text-sm  text-error"
						>
							Maybe later
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddReview;
