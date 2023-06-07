
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { ErrorPage } from "../ErrorPage";

import { AuthProvider, LoginPage } from "../auth";
import { HeroesRoutes} from "../heroes/routes/HeroesRoutes";
import { ChildHeroesRoutes } from "../heroes/routes/ChildHeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


const router = createHashRouter([
    {
        path: "/login",
        element: <PublicRoute >
                    <LoginPage/>
                </PublicRoute>,
    },
    {
        path: "/",
        element: <PrivateRoute >
                    <HeroesRoutes/>
                </PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: ChildHeroesRoutes
    },

]);


export const AppRouter = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    )
}

