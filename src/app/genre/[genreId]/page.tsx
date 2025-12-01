"use client";

import { BaseStructure } from "@/app/_components/BaseStructure";
import axios from "axios";

import { useEffect, useState, use } from "react";
import { MovieTypes } from "@/app/_components/movietypes";
import { useParams } from "next/navigation";
import { DVDcard } from "@/app/_components/dvdcard";
//ideas: implement all api data as one component. {server component}
//every time I need it, just call and clean the data ready for use => another section of function component {server componenet}
//

type Params = {
  genreId: string;
};

const genreSection = () => {

  const { genreId } = useParams<Params>();
  const [datas, setDatas] = useState<MovieTypes[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        )
        if (!res.ok) {
          console.log("res not ok");
        }
        const data = await res.json();
        setDatas(data.results);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    dataFetch();
  }, []);
  return (
    <BaseStructure>
      {datas.map((el, i) => (
        <DVDcard
          key={i}
          title={el.title}
          overview={el.overview}
          poster_path={`https://image.tmdb.org/t/p/original${el.poster_path}`}
          vote_average={el.vote_average}
          vote_count={el.vote_count}
        ></DVDcard>
      ))}
    </BaseStructure>
  );
};
export default genreSection;
