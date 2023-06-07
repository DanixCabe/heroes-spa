import { Link } from "react-router-dom"

export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters} = hero

    const heroImageUrl = `/images/heroes/${id}.jpg`
    const newCharacers = characters.split(',').filter(character => character != alter_ego).map( (chars) => chars ).join()
    
    const charactersByHero =  <p className="mb-2 text-xs">{newCharacers}</p>
    
    return (
        <div className=" border-gray-500 shadow-lg h-auto rounded-md mt-4 animate__animated animate__fadeIn">
            <div className="flex">
                <div className="w-1/3">
                    <img src={heroImageUrl}  alt={superhero} className="w-auto h-auto rounded-l-md"/>
                </div>
                <div className="w-2/3 px-4 pt-2 pb-1">
                    <h4 className="text-xl text-gray-900 mb-2">{superhero}</h4>
                    <p className="mb-2">{alter_ego}</p>
                    {
                        (alter_ego !== characters) && (charactersByHero)
                    }
                    <p className="text-gray-400 text-xs mb-2">{first_appearance}</p>

                    <Link className="text-blue-400 hover:text-blue-600" to={`/hero/${id}`}>
                        Más...
                    </Link>

                </div>
            </div>
        </div>


    )
}
