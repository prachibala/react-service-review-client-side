import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
        ],
    },
]);

export default router;
