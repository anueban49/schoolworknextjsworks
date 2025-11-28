export type BaseStructureType = {
  children: React.ReactNode;
};
import { Popover } from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectPortal,
} from "@radix-ui/react-select";
import { Genre } from "../movies/page";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Route } from "next";
import { useRouter } from "next/navigation";
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
          <img src="\movie\icons\Logo.jpg" alt="MovieZ" onClick={() => {router.push(`/moviedynamic`)}}/>
        </span>
        <div className="flex gap-2"></div>
        <div className="flex">
          <Select>
            <SelectTrigger className="w-[180px] z-50">
              <SelectValue placeholder="Genres" />
            </SelectTrigger>

            <SelectContent className="absolute">
              <SelectGroup className="fixed top-10 text-red-200 bg-blue-300 z-50">
                <SelectLabel>Genres</SelectLabel>
                {genres.map((genre: Genre) => (
                  <SelectItem
                    className="z-50"
                    style={{ zIndex: "50" }}
                    key={genre.id}
                    value={genre.name}
                  >
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
      <div className="relative z-10">{children}</div>
      <footer className="bg-indigo-700 w-screen min-w-300 h-70"></footer>
    </div>
  );
};
