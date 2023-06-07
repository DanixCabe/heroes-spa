import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useMenuOpen } from '../hooks/useMenuOpen';
import { AuthContext } from '../../auth';
import { useContext } from 'react';




export const Navbar = () => {

    const {changeMobMenu, toggleMenu, openSetting, toggleSettings} = useMenuOpen();
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate();
    

    const onLogout = () =>{
        logout();
        
        navigate('/login', {
            replace: true
        });
    }


    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {
                                !changeMobMenu ?
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                :
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink  
                                    className={({isActive}) => `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                    to="/marvel">
                                    Marvel Heroes
                                </NavLink>
                                <NavLink  
                                    className={({isActive}) => `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                    to="/dc">
                                    DC Heroes
                                </NavLink>
                                <NavLink  
                                    className={({isActive}) => `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                    to="/search">
                                    Search Heroes
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                        <div onClick={toggleSettings} className="relative ml-3" >
                            <div>
                                <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src="./images/profile/profile-picture.png" alt=""/>
                                </button>
                            </div>
                            {
                                openSetting ?
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  py-1 shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                    <p className="block px-4 py-2 text-sm text-gray-800 font-semibold">{user?.name}</p>
                                    <hr className='w-11/12 mx-auto border-gray-300'/>
                                    <button onClick={onLogout} className="block mx-2 px-2 py-1 my-1 text-sm text-gray-600 hover:text-gray-950  " role="menuitem" tabIndex="-1" id="user-menu-item-2">Logout</button>
                                </div>
                            : ``
                            }
                            
                        </div>
                    </div>

                </div>
            </div>

                        

            {
                changeMobMenu && 
                (
                    <div className="sm:hidden active:visible" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                        <NavLink  
                            className={({isActive}) => `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                            to="/marvel">
                            Marvel Heroes
                        </NavLink>
                        <NavLink  
                            className={({isActive}) => `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                            to="/dc">
                            DC Heroes
                        </NavLink>
                        <NavLink  
                            className={({isActive}) => `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                            to="/search">
                            Search Heroes
                        </NavLink>
                        </div>
                    </div>
                )
            }
            
        </nav>

    )
}