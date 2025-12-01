'use client';
export type BaseStructureType = {
  children: React.ReactNode;
};
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export type Genre = {
  id: number;
  name: string;
};
// todos: implement search algorithm and genre function
export const BaseStructure = ({ children }: BaseStructureType) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        );
        const data = await res.json();
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, []);
  return (
    <div
      style={{
        boxSizing: "border-box",
        margin: "0%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        id="header"
        className="Header"
        style={{
          maxWidth: "vw",
          margin: "0%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "1%",
        }}
      >
        <span>
          <img
            src="\movie\icons\Logo.jpg"
            alt="MovieZ"
            onClick={() => {
              router.push(`/moviedynamic`);
            }}
          />
        </span>
        <div className="flex gap-2"></div>
        <div className="flex">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Genres</Button>
            </PopoverTrigger>
            <PopoverContent>
              {genres.map((genre, id) => (
                <Button
                  key={genre.id}
                  onClick={() => {
                    router.push(`/genre/${genre.id}`);
                  }}
                  // onClick={() => {console.log(`${genre.name} ${genre.id}`)}}
                >
                  {genre.name}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
          <Input
            className="w-80 scrollbar-hide"
            placeholder="Search Movies"
          ></Input>
        </div>

        <span>
          <Moon />
        </span>
      </div>
      <div className="relative z-10">{children}</div>
      <footer className="bg-indigo-700 w-screen min-w-300 h-70"></footer>
    </div>
  );
};
