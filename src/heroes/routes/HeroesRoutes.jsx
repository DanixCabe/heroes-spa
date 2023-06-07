import { Outlet } from "react-router-dom"
import { Navbar } from '../../ui/index'


export const HeroesRoutes = () => {


    return (
        <>
            <Navbar />
            <div className="mt-5 px-10 ">
                <Outlet />
            </div>
        </>
    )
}


