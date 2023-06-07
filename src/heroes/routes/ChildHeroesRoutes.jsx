import { Navigate } from "react-router-dom"
import { DcPage, MarvelPage, SearchPage, Hero } from "../pages"


export const ChildHeroesRoutes = [
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "hero/:id",
        element: <Hero />,
    },
    {
        path: '/*',
        element: <Navigate to="marvel"/>
    },
]

