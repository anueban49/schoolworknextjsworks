type MediaProps = {
    title: string;
    description?: string;
    img: string;
    rating: number;
    genres?: string[];
}
export const MediaDVD = (props: MediaProps) => {
    return (
        <>
        <div className="rounded-2xl bg-gray-300">
            <img src={props.img} alt="" className=""/>
            <div>{props.rating}</div>
            <h1>{props.title}</h1>

        </div>
        </>
    )
}