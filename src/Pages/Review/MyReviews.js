import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const MyReveiws = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		if (user) {
			fetch(
				`${process.env.REACT_APP_server_url}/reviews-by-user/${user.uid}`,
				{
					headers: {
						"Content-Type": "application/json",
						authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					setReviews(data);
					// setLoading(false);
				})
				.catch((err) => console.log(err));
		}
	}, [user]);

	return (
		<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mb-10">
			<h2 className="mb-4 text-2xl font-semibold leading-tight">
				My Reviews
			</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full text-xs">
					<colgroup>
						<col />
						<col />
						<col />
						<col />
						<col />
					</colgroup>
					<thead className="dark:bg-lime-100">
						<tr className="text-left">
							<th className="p-3">Menu</th>
							<th className="p-3">Review</th>
							<th className="p-3">Rating</th>
							<th className="p-3">Delete</th>
							<th className="p-3"></th>
						</tr>
					</thead>
					<tbody>
						{reviews.map((review) => (
							<tr
								className="border-b border-opacity-20 dark:border-gray-700 "
								key={review._id}
							>
								<td className="p-3">
									<p>{review.menu.menuName}</p>
								</td>
								<td className="p-3">
									<p>{review.reviewText}</p>
								</td>
								<td className="p-3">
									<p>{review.rating}</p>
								</td>

								<td className="p-3">
									<button className="btn btn-ghost dark:bg-error sm:btn-sm md:btn-md lg:btn-md">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-4 h-4 mr-1"
										>
											<path
												fillRule="evenodd"
												d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Delete</span>{" "}
									</button>
								</td>

								<td className="p-3 text-right">
									<Link
										className="btn btn-ghost dark:bg-lime-400 sm:btn-sm md:btn-md lg:btn-md"
										to={`/menus/${review.menu.menuId}`}
									>
										View Menu
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyReveiws;
