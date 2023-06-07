import { HeroList } from "../components"

export const DcPage = () => {
    return (
        <>
            <h1 className="text-5xl my-4">DC Comics</h1>
            <hr/>

            <HeroList publisher='DC Comics' />
        </>
    )
}
