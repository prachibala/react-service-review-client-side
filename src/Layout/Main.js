import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
import NavTop from "../Header/NavTop";
import { ToastContainer } from "react-toastify";

const Main = () => {
	return (
		<div>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<NavTop></NavTop>
			<Nav></Nav>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
