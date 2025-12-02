"use client";
import { useState, useEffect, ReactNode, use } from "react";

import { BaseStructure } from "@/app/_components/BaseStructure";
import { MovieTypes } from "@/app/_components/movietypes";
import { Carousel } from "@/components/ui/carousel";

interface Details {
  params: {
    movieId: string;
  };
}
const Moviedetails = ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = use(params);
  const [datas, setDatas] = useState<MovieTypes[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        );
        const data = await res.json();
      
        setDatas(data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    dataFetch();
  }, []);

  return (
    <>
      <BaseStructure>
        <div className="w-full px-10 py-4 gap-10">
          <div className="flex justify-between">
            <h1 className="text-4xl font-medium">{datas.title}</h1>
            <p>{datas.release_date}</p>
          </div>
          <div style={{backgroundImage:"url"}}></div>
          <img src={`${process.env.TMDB_IMAGE_SERVICE_URL}/original${datas.backdrop_path}`}/>
          <div>{datas.genre_ids}</div>
          <h3>{datas.overview}</h3>
          <div></div>
        </div>
      </BaseStructure>
    </>
  );
};
export default Moviedetails;
