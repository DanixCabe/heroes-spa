import { HeroList } from "../components"

export const MarvelPage = () => {
    return (
        <>
            <h1 className="text-5xl my-4">MarvelPage</h1>
            <hr/>

            <HeroList publisher='Marvel Comics' />
        </>
    )
}
