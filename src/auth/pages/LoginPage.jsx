import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext, AuthProvider } from "../context";

export const LoginPage = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = () =>{
        login('Daniel Gizzi');
        
        const lastPath = localStorage.getItem('lastPath') || '/'

        navigate(lastPath , {
           replace: true 
        })
    }

    return (
        <div className="mt-5 px-8">
            <h1 className="text-4xl mb-4"> Login</h1>
            <hr />

            <button onClick={onLogin} className="bg-fuchsia-500 text-gray-50 font-semibold text-lg rounded-full w-32 p-2 mt-3 transition duration-300 hover:bg-fuchsia-700 hover:scale-105 ease-in">
                Login
            </button>
        </div>
    )
}
