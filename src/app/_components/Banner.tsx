type BannerProps = {
    img: string;
    title: string;
    rating: number;
    genre?: string;
    overview: string;
}
export const Banner = (props: BannerProps) => {
    return (
        <>
        <div>
            <img src={props.img} className="object-cover bg-center w-full aspect-12/5"/>
            <h1>{props.title}</h1>
            <span>{props.rating}</span>
            <p>{props.overview}</p>
        </div>
        </>
    )
}