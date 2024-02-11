import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import TaskManagement from "../page/taskManagement/TaskManagement";
import PrivetRoutes from "./PrivetRoutes";
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
            },
            {
                path: "task-management",
                element: <PrivetRoutes><TaskManagement></TaskManagement></PrivetRoutes>
            }
        ]
    },
]);

export default router;