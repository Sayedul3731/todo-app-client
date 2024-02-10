import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;