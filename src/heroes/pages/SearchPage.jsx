import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroByName } from "../helpers"


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    const heroes = getHeroByName(q);
    const showSearch = (q.length === 0)
    const showError = (q.length > 0) && heroes.length === 0

    const { searchText, onInputChange } = useForm({
        searchText: ''
    })

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        if (searchText.trim().lenght <= 1) return;
        navigate(`?q=${searchText}`)
    }


    return (
        <>
            <h1 className="text-5xl font-semibold">Search</h1>
            <hr/>

            <div className="flex flex-row gap-4">
                <div className="grid grid-cols-1 w-1/2 h-max">
                    <h4 className="text-xl font-semibold mb-2 mt-3">Searching</h4>
                    <hr/>
                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="block border border-slate-300 placeholder-slate-300 shadow-sm rounded-md mt-4 px-2 py-1 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 " 
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="bg-white border-sky-500 text-sky-500 rounded-md border-2 shadow-md px-2 py-1 mt-3 transition duration-300 hover:bg-sky-500 hover:text-white"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 w-1/2 h-max">
                    <h4 className="text-xl font-semibold mb-2 mt-3">Result</h4>
                    <hr/>

                       <div className={`border bg-sky-200 shadow-sm rounded-md mt-4 px-3 py-2 font-semibold text-sky-600 text-base animate__animated animate__fadeIn ${showSearch ? 'block' : 'hidden'}`}>
                            Search a Hero
                        </div>



                        <div className={`border bg-red-200 shadow-sm rounded-md mt-4 px-3 py-2 font-medium  text-red-600 text-base animate__animated animate__fadeIn ${showError ? 'block' : 'hidden'}`}>
                            This hero <strong className="font-extrabold">"{q}"</strong> no exist
                        </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} hero={hero}/>
                        ))
                    }

                    {/*  */}
                </div>
            </div>
        </>
    )
}
