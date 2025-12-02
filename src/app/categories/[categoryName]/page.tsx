"use client";
import { useState, useEffect, ReactNode, use } from "react";

import { BaseStructure } from "@/app/_components/BaseStructure";
import { MovieTypes } from "@/app/_components/movietypes";
import { DVDcard } from "@/app/_components/dvdcard";

interface CategorySectionProps {
  params: {
    category: string;
  };
}
//when clciked, it fetches api data of that cerain media and renders it to an
const CategorySecton = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);
  const [datas, setDatas] = useState<MovieTypes[]>([]);
  const [currentPage, SetCurrentPage] = useState(1);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&${currentPage}`,
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
        {datas.map((el, id) => (
          <DVDcard
            key={el.id}
            title={el.title}
            overview={el.overview}
            vote_average={el.vote_average}
            vote_count={el.vote_count}
            poster_path={`${process.env.TMDB_IMAGE_SERVICE_URL}/original${el.poster_path}`}
          />
        ))}

      </div>
      </BaseStructure>
    </>
  );
};
export default CategorySecton;
