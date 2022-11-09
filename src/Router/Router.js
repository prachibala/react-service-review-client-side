import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AllMenu from "../Pages/Menu/AllMenu";
import MenuDetails from "../Pages/Menu/MenuDetails";
import Register from "../Pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menus",
                element: <AllMenu></AllMenu>,
            },
            {
                path: "/menus/:id",
                element: <MenuDetails></MenuDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/menus/${params.id}`);
                },
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;
