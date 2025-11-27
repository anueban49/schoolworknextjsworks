"use client";
import { useState, useEffect, ReactNode } from "react";
import { useParams } from "next/navigation";
import { BaseStructure } from "@/app/_components/BaseStructure";
import { MovieTypes } from "@/app/_components/movietypes";
import { DVDcard } from "@/app/_components/dvdcard";

const CategorySecton = ({params,}: 
    {params: Promise<{ category: string }>}) => {
        const {category} = params
  const [datas, setDatas] = useState<MovieTypes[]>([]);
 
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/movie/${category}?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          }
        );
        const data = await res.json();
        // setDatas(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    dataFetch();
  }, [category]);

  return (
    <>
      {category}
      <BaseStructure>
        {datas.map((el, id) => (
          <DVDcard
            key={id}
            title={el.title}
            overview={el.overview}
            vote_average={el.vote_average}
            vote_count={el.vote_count}
            poster_path={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${el.poster_path}`}
          />
        ))}
      </BaseStructure>
    </>
  );
};
export default CategorySecton;
