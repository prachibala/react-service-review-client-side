import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import UseTitle from "../Hooks/UseTitle";
const Register = () => {
	const { createUser, updateUser } = useContext(AuthContext);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	UseTitle("Register");

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const photoURL = form.photoURL.value;
		const password = form.pass.value;

		createUser(email, password)
			.then((result) => {
				const user = result.user;

				return fetch(`${process.env.REACT_APP_server_url}/jwt`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: user.email }),
				});
			})
			.then((res) => {
				return res.json();
			})
			.then((token) => {
				console.log(token);
				localStorage.setItem("token", token.token);
				return updateUser(name, photoURL);
			})
			.then((res) => {
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			});
	};
	return (
		<div>
			<div className="hero min-h-screen  w-9/12 mx-auto">
				<div className="hero-content flex-col lg:flex-row">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Register now!</h1>
						<p className="py-6">
							Nutrition is just one aspect of 'Good Food Good
							Lifeeee'......
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						{/* FORM  */}
						<form className="card-body" onSubmit={handleSubmit}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo</span>
								</label>
								<input
									type="text"
									placeholder="photoURL"
									name="photoURL"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<span
								className="label-text "
								style={{ color: "red" }}
							>
								{" "}
								<small>{error}</small>
							</span>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="pass"
									placeholder="password"
									className="input input-bordered"
									required
								/>
							</div>
							<div>
								<label className="label ">
									<p className="label-text-alt   ">
										Already, have an account? please{" "}
										<Link
											to="/login"
											className="link link-error"
										>
											Login
										</Link>
									</p>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-ghost bg-lime-400"
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
