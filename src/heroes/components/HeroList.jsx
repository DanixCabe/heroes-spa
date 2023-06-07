import { HeroCard } from "./"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { useMemo } from "react"



export const HeroList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]) 


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 animate__animated animate__fadeIn">
                {
                    heroes.map(
                        (hero) => (
                            <HeroCard key={hero.id} hero={hero}/>
                        )
                    )
                }
            </div>
        </>
    )
}
