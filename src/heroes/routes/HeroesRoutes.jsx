import { Outlet } from "react-router-dom"
import { Navbar } from '../../ui/index'


export const HeroesRoutes = () => {


    return (
        <>
            <Navbar />
            <div className="mt-5 px-10 sm:mx-auto sm:px-0 sm:max-w-xl  md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
                <Outlet />
            </div>
        </>
    )
}


