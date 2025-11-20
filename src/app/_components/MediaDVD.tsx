
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
export const MediaDVD = (props: MediaProps) => {
  return (
    <>
      <div
        className="w-screen aspect-12/5 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${props.poster_path})`, padding: "40px"}}
      >
        <div className="w-full flex flex-col gap-4 align-center">
          <p style={{ color: "white" }}>Now Playing:</p>
          <h1 style={{ color: "white", fontSize: "40px"}}>{props.title}</h1>
          <h2 style={{ color: "white" }}>{props.popularity}</h2>
          <p style={{ color: "white", display: "flex", gap: "5px"}}> 
            <Star/>
            {props.vote_average}/10</p>
        </div>
      </div>
    </>
  );
};
