"use client";
//page layout.specific: left side contains genre section, while right side contain filter function that sorts out the designed genre movies(4x3 grid with pagination).
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
export type Genre = {
  id: number;
  name: string;
};

const genrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const router = useRouter();
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
    const renderResults = async() => {
      try {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/discover/movie?language=en&with_genres=${genreIds}&page=${page}`)
      }
    }
  })
  const [select, setSelect] = useState(false);
  const genreSelect = () => {
    setSelect((prev) => !prev)
  };
  return (
    <>
      <div
        style={{ width: "full", height: "100vh" }}
        className="w-full h-vh px-[5em] py-[2em] flex flex-row"
      >
        <div className="w-1/3 border-amber-400 border-2">
          {genres.map((genre, id) => (
            <Button
            style={{padding: "2em, 0", borderRadius: "2em", fontSize:"1em", fontWeight:"400", scale:"0.8"}}
            //   className="px-6 scale-80 py-0 my-{5px} rounded-[20px] text-[16px] font-normal"
              variant={"outline"}
              key={genre.id}
              onClick={() => {
                genreSelect;
                console.log('selected ' ,genre.name);
              }}
            >
              {genre.name}
              <ChevronRight strokeWidth={3} />
            </Button>
          ))}
        </div>
        <div className="w-2/3">
          {/* <iframe className="w-full h-screen" src="/genre/[genreId]">
          </iframe> */}
          <div></div>
        </div>
      </div>
    </>
  );
};
export default genrePage;
