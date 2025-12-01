import { BaseStructure } from "@/app/_components/BaseStructure";
import axios from "axios";
import { useEffect } from "react";
//ideas: implement all api data as one component. {server component}
//every time I need it, just call and clean the data ready for use => another section of function component {server componenet}
//

interface Genres {
    params: {
        genreName: string}
}
const genreSection = (props: Genres) => {

    //get the genre data => get the all movies data and their genres
    useEffect(() => {

    }, [])
    return (
        <BaseStructure>{genres}</BaseStructure>
    )
}