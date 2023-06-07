import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";


export const Hero = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const hero = useMemo( () => getHeroById(id), [id]); 

    const heroImageUrl = `./images/heroes/${hero.id}.jpg`

    if (!hero){
        return <Navigate to='/marvel'/>
    }

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <>

            <div className="flex flex-col sm:flex-row justify-center items-center md:items-start my-3 ">
                <div className="w-auto md:w-1/3">
                    <img src={heroImageUrl}  alt={hero.superhero} className="w-64 md:w-96 h-auto rounded-md p-1 border-2 animate__animated animate__fadeInLeft object-cover"/>
                </div>
                <div className="w-auto 1/1 md:w-2/3 pl-4">
                    <h2 className="text-3xl font-semibold my-2">{hero.superhero}</h2>
                    <ul className="">
                        <li className="rounded border-b-2 px-2 py-1 shadow-sm mb-2"><strong className="font-semibold">Alter ego:</strong> <span className="text-sm text-gray-500">{hero.alter_ego}</span></li>
                        <li className="rounded border-b-2 px-2 py-1 shadow-sm mb-2"><strong className="font-semibold">Publisher</strong> <span className="text-sm text-gray-500">{hero.publisher}</span></li>
                        <li className="rounded border-b-2 px-2 py-1 shadow-sm"><strong className="font-semibold">First Appearance:</strong> <span className="text-sm text-gray-500">{hero.first_appearance}</span></li>
                    </ul>
                    <h4 className="text-xl font-semibold mt-3">Characters</h4>
                    <p className="text-sm text-gray-500">{hero.characters}</p>
                    <button className="bg-white border-sky-500 text-sky-500 rounded-md border-2 shadow-md px-2 py-1 mt-3 transition duration-300 hover:bg-sky-500 hover:text-white"
                    onClick={onNavigateBack}>
                        Regresar
                    </button>
                </div>
            </div>
            
        </>
    )
}
