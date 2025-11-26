import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type NowPlaying = {
  title: string;
  overview: string;
  poster_path: string;
  popularity?: number;
  genre_ids?: number[];
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
};
export const NowPlaying = (props: NowPlaying) => {
  const [nowplaying, setNowplaying] = useState<NowPlaying[]>([]);
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        );
        const data = await res.json();
        console.log(data.results);
        setNowplaying(data.results);
      } catch (error) {
        console.log(error);
      }
      fetchNowPlaying();
    };
  }, []);
  return (
    <>
      <Carousel
        id="promotionBanner"
        className="w-screen aspect-12/5 overflow-x-scroll scrollbar-hide relative p-0 m-0 pl-0"
        style={{
          width: "full",
          aspectRatio: "12/5",
          scrollbarWidth: "none",
          padding: "0px",
        }}
      >
        <CarouselContent className="flex" style={{ scrollbarWidth: "none" }}>
          {nowplaying.map((el, i) => {
            return (
              <CarouselItem
                key={i}
                className="w-screen aspect-12/5 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${props.poster_path})`,
                  padding: "10%",
                }}
              >
                <div className="w-full flex flex-col align-center">
                  <p style={{ color: "white", fontSize: "100%" }}>
                    Now Playing:
                  </p>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "4em",
                      fontWeight: "700",
                    }}
                  >
                    {props.title}
                  </h1>
                  <h2 style={{ color: "white" }}>{props.popularity}</h2>
                  <p style={{ color: "white", display: "flex", gap: "5px" }}>
                    <Star style={{ color: "yellow", fill: "yellow" }} />
                    {props.vote_average}/10
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-3" />
        <CarouselNext className="absolute top-1/2 right-3" />
      </Carousel>
      {/* <div
        className="w-screen aspect-12/5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${props.poster_path})`, padding: "10%" }}
      ></div> */}
    </>
  );
};
