import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import AllMenu from "../Pages/Menu/AllMenu";
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
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
        ],
    },
]);

export default router;
