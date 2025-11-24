
import { Star } from "lucide-react";

type MediaProps = {
  title: string;
  overview: string;
  poster_path: string;
  popularity?: number;
  genre_ids?: number[];
  vote_average: number;
  vote_count: number;
};
export const NowPlaying = (props: MediaProps) => {
  return (
    <>
      <div
        className="w-screen aspect-12/5 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${props.poster_path})`, padding: "10%"}}
      >
        <div className="w-full flex flex-col gap-4 align-center">
          <p style={{ color: "white", fontSize:"2em"}}>Now Playing:</p>
          <h1 style={{ color: "white", fontSize: "4em", fontWeight:"700"}}>{props.title}</h1>
          <h2 style={{ color: "white" }}>{props.popularity}</h2>
          <p style={{ color: "white", display: "flex", gap: "5px"}}> 
            <Star style={{color: "yellow", fill: "yellow"}}/>
            {props.vote_average}/10</p>
        </div>
      </div>
    </>
  );
};
