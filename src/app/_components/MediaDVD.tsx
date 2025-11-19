type MediaProps = {
    title: string;
    overview: string;
    poster_path: string;
    popularity: number;
    genre_ids: string[];
}
export const MediaDVD = (props: MediaProps) => {
    return (
        <>
        <div className="rounded-2xl bg-gray-300">
            <img src={props.poster_path} alt="" className=""/>
            <div>{props.popularity}</div>
            <h1>{props.title}</h1>

        </div>
        </>
    )
}