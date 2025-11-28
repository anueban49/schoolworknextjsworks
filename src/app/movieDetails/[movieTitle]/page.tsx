'use client'
import { BaseStructure } from "@/app/_components/BaseStructure";
import { useState, useEffect, use } from "react";


import { MovieTypes } from "@/app/_components/movietypes";
import { DVDcard } from "@/app/_components/dvdcard";

interface movieDetailsProps {
  params: {
    movieDetails: string;
  };
}
const CategorySecton = ({
  params,
}: {
  params: Promise<{ movieTitle: string }>;
}) => {
  const { movieTitle } = use(params);
  const [datas, setDatas] = useState<MovieTypes[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      console.log(process.env.TMDB_BASE_URL);
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/movie/${movieTitle}?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        );
        const data = await res.json();
        setDatas(data.results);
        console.log(data.results)
      } catch (error) {
        console.log(error);
      }
    };

    dataFetch();
  }, []);

  return (
    <>
      <BaseStructure>

      <div className="w-full px-10 py-4 gap-10 grid grid-cols-5 grid-rows-2">
        {movieTitle}

      </div>
      </BaseStructure>
    </>
  );
};
export default CategorySecton;
