import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layout/MainLayout";
import { AdminLayout } from "@layout/AdminLayout";
import { UserLayout } from "@layout/UserLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/> 
     },

    {
        path: '/user',
        element: <UserLayout/> 
     },

    {
        path: '/admin',
        element: <AdminLayout/> 
     }
])


export default Router;


