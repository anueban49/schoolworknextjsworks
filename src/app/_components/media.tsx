type MediaProps = {
    img: string;
    title: string;
    rating: number;
}
export const Media = (props: MediaProps) => {
    return (
        <div>
            <img src={props.img} className="w-full aspect-5/3 rounded-2xl"/>
            <div>{props.rating}</div>
            <p>{props.title}</p>
        </div>
    )
}