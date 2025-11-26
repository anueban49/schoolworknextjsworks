export type BaseStructureType = {
  children: React.ReactNode;
};

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";
import { Genre } from "../movies/page";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Children } from "react";

export const BaseStructure = ({children}: BaseStructureType) => {
  const [genres, setGenres] = useState<Genre[]>([]);
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
          justifyContent: "between",
          alignItems: "center",
          padding: "1%",
        }}
      >
        <span>
          <img src="\movie\icons\Logo.jpg" alt="MovieZ" />
        </span>
        <div className="flex gap-2"></div>
        <div className="flex">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Genres" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genres</SelectLabel>
                {genres.map((genre: Genre) => (
                  <SelectItem key={genre.id} value={genre.name}>
                    {genre.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className="w-80 scrollbar-hide"
            placeholder="Search Movies"
          ></Input>
        </div>

        <span>
          <Moon />
        </span>
      </div>
      <div>{children}</div>
      <footer className="bg-indigo-700 w-screen min-w-300 h-70"></footer>
    </div>
  );
};
