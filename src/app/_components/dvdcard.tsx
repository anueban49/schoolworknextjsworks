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
      <div className="aspect-23/44 rounded-2xl overflow-hidden bg-gray-200 scale-85">
        <div
          className=" aspect-23/34 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${props.poster_path})` }}
        ></div>{" "}
        <div className="flex flex-col gap-4 p-4">
          <p style={{ color: "black", display: "flex", gap: "5px", fontSize: "110%"}}>
            <Star style={{ color: "yellow", fill: "yellow" }} />
            {props.vote_average.toFixed(1)}/10
          </p>

          <p style={{ color: "black", fontSize: "200%", lineHeight:"1", fontWeight: "200" }}>
            {props.title}
          </p>
        </div>
      </div>
    </>
  );
};
