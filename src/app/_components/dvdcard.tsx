import { Star } from "lucide-react";
type DVDcardProps = {
  title: string;
  overview: string;
  poster_path: string;
  popularity?: number;
  genre_ids?: number[];
  vote_average: number;
  vote_count: number;
};
export const DVDcard = (props: DVDcardProps) => {
  return (
    <>
      <div className="w-full aspect-23/44 rounded-2xl overflow-hidden">
        <div
          className="w-full aspect-23/34 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${props.poster_path})` }}
        ></div>{" "}
        <p style={{ color: "black", display: "flex", gap: "5px" }}>
          <Star style={{ color: "yellow", fill: "yellow" }} />
          {(props.vote_average).toFixed(1)}/10
        </p>
        <div className="flex flex-col gap-4 ">
          <p style={{ color: "black", fontSize: "15px", fontWeight: "500" }}>{props.title}</p>
        </div>
      </div>
    </>
  );
};
