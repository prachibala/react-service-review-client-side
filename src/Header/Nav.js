import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import pic from "../Images/donut.png";

const Nav = () => {
	const navigate = useNavigate();
	const { user, logOut } = useContext(AuthContext);
	const LogOut = () => {
		logOut()
			.then(() => {
				localStorage.removeItem("token");
				navigate("/login");
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div className="nav">
			<div className="navbar bg-base-100 ">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li tabIndex={0}>
								<Link to="/menus" className="justify-between">
									Menu
								</Link>
							</li>
							{user ? (
								<li>
									<Link to="/my-reviews">My review</Link>
								</li>
							) : (
								""
							)}

							{user ? (
								<li>
									<Link to="/add-menu">Add Menu</Link>
								</li>
							) : (
								""
							)}
							<li>
								<Link to="/blogs">Blogs</Link>
							</li>
						</ul>
					</div>
					<Link className="btn btn-ghost normal-case text-xl">
						<span className="w-10 lg:w-14 md:10 p-1 ">
							<img src={pic} alt="" />
						</span>
						Snack
						<span className="dark:text-lime-400 text-3xl">B</span>ox
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li tabIndex={0}>
							<Link to="/menus">Menu</Link>
						</li>
						{user ? (
							<li>
								<Link to="/my-reviews">My review</Link>
							</li>
						) : (
							""
						)}

						{user ? (
							<li>
								<Link to="/add-menu">Add Menu</Link>
							</li>
						) : (
							""
						)}
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
						{user && (
							<div
								className="dropdown dropdown-end tooltip tooltip-bottom tooltip-base-300"
								data-tip={user.displayName}
							>
								<label
									tabIndex={0}
									className="btn btn-ghost btn-circle avatar"
								>
									<div className="w-10 rounded-full">
										<img src={user.photoURL} alt="" />
									</div>
								</label>
							</div>
						)}
					</ul>
				</div>

				{/* user ----->log in || log out */}
				<div className="navbar-end">
					{user ? (
						<Link
							to="/login"
							onClick={LogOut}
							className="btn btn-ghost bg-lime-400 text-base-content "
						>
							LogOut
						</Link>
					) : (
						<Link
							to="/login"
							className="btn btn-ghost bg-lime-400 text-base-content "
						>
							Sign in
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
