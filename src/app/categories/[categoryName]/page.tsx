"use client";
import { useState, useEffect } from "react";
import { MovieTypes } from "@/app/_components/movietypes";
import { DVDcard } from "@/app/_components/dvdcard";
import { useParams } from "next/navigation";
export type Movie = MovieTypes;
const CategorySecton = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const categoryName = useParams;
  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${categoryName}/top_rated?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.results)
    };
    
  }, []);
  return (
    <>
      <div>category: {params.categoryName}</div>
    </>
  );
};
export default CategorySecton;
