import React from "react";
import { Link } from "react-router-dom";
import UseTitle from "../Hooks/UseTitle";
const Register = () => {
    UseTitle("Register");
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
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
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
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="pass"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
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
