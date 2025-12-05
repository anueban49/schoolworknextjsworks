"use client";
//page layout.specific: left side contains genre section, while right side contain filter function that sorts out the designed genre movies(4x3 grid with pagination).
import { useState, useEffect, use, ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { DVDcard } from "@/app/_components/dvdcard";
import { MovieTypes } from "@/app/_components/movietypes";
export type Genre = {
  id: number;
  name: string;
};

const genrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const router = useRouter();
 const [results, setResults] = useState()
  const searchparams = useSearchParams();
  const genreIds = searchparams.get("genreIds")?.split(",") || [];

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/genre/movie/list?language=en`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        );
        if (!res.ok) {
          console.log("res not ok");
        }
        const data = await res.json();

        console.log(data.genres);
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, []);
  useEffect(() => {
    const renderResults = async () => {
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/discover/movie?language=en&with_genres=${genreIds}&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
          
        );
        const data = await res.json();
        setResults(data.results);
        console.log(data.results)
      } catch (error) {
        console.log(error);
      }
    };
    renderResults();
  });
  const handleClickgenre = (genreId: string) => {
    const params = new URLSearchParams(searchparams.toString())
    params.set("genreIds", genreId);
    
    const updatedGenreIds = genreIds?.includes(genreId)?
    genreIds.filter((id) => id !== genreId) : [...genreIds, genreId];
    params.set("genreIds", updatedGenreIds.join(","));
    router.push(genreId + "?" + params);
  }
  return (
    <>
      <div
        style={{ width: "full", height: "100vh" }}
        className="w-full h-vh px-[5em] py-[2em] flex flex-row"
      >
        <div className="w-1/3 border-amber-400 border-2">
          {genres.map((genre, id) => (
            <Button
              style={{
                padding: "2em, 0",
                borderRadius: "2em",
                fontSize: "1em",
                fontWeight: "400",
                scale: "0.8",
              }}
              key={genre.id}
              variant={"default"}
              // onClick={() => genreSelect(genre.name, genre.id)}
              onClick={() => {handleClickgenre(genre?.id);}}
            >
              {genre.name}
              <ChevronRight strokeWidth={3} />
            </Button>
          ))}
        </div>
        <div className="w-2/3">
          <div>{results?.map((el, id) => (
            <DVDcard>

            </DVDcard>
          ))}</div>
        </div>
      </div>
    </>
  );
};
export default genrePage;
