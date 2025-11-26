"use client";

import * as React from "react";

import { NowPlaying } from "@/app/_components/nowplaying";
import { DVDcard } from "@/app/_components/dvdcard";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SelectTrigger, SelectValue, Value } from "@radix-ui/react-select";
import { start } from "repl";

import { Button } from "@/components/ui/button";
import { Shelf } from "../_components/shelf";
import { Moon } from "lucide-react";

export type MovieTypes = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average: any;
  vote_count: number;
}; 
export type Genre = {
  id: number;
  name: string;
};
export type Movie = MovieTypes;
export type Upcoming = MovieTypes;
export type Popular = MovieTypes;
export type TopRated = MovieTypes;
type Response = {
  page: number;
  result: Movie[];
  total_pages: number;
  total_results: number;
};
type ShelfProps = {
  title: string;
  elements: Movie[];
};
const API_BASE = "https://api.themoviedb.org/3";
const AUTH_HEADERS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.API_KEY}`,
  },
};

const fetchJSON = (url: any) => {
  return fetch(url, AUTH_HEADERS).then((res) => res.json());
};

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [upcoming, setUpcoming] = useState<Upcoming[]>([]);
  const [popular, setPopular] = useState<Popular[]>([]);
  const [toprated, setToprated] = useState<TopRated[]>([]);
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const [movieData, genreData, upcomingData, popularData, topratedData] =
          await Promise.all([
            fetchJSON(`${API_BASE}/movie/now_playing?language=en-US&page=1`),
            fetchJSON(`${API_BASE}/genre/movie/list?language=en`),
            fetchJSON(`${API_BASE}/movie/upcoming?language=en-US&page=1`),
            fetchJSON(`${API_BASE}/movie/popular?language=en-US&page=1`),
            fetchJSON(`${API_BASE}/movie/top_rated?language=en-US&page=1`),
          ]);

        setMovies(movieData.results);
        setGenres(genreData.genres);
        setUpcoming(upcomingData.results);
        setPopular(popularData.results);
        setToprated(topratedData.results);
        console.log(genreData.genres);
        console.log(topratedData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getMovieData();
  }, []);
  const [visibleCount, setVisibleCount] = useState(10);

  return (
    <>
      <div className="border-box w-screen h-fit flex flex-col gap-4 py-4">
        <div
          id="header"
          className="w-full h-10 flex gap-4 items-center px-0 py-2 justify-around"
        >
          <span>
            <img src="\movie\icons\Logo.jpg" alt="MovieZ" />
          </span>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Genres" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Genres</SelectLabel>
                  <SelectItem value="Adventure">Adventure</SelectItem>
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
        <Carousel
          id="promotionBanner"
          className="w-screen aspect-12/5 overflow-x-scroll scrollbar-hide relative p-0 m-0 pl-0"
          style={{ width:"full", aspectRatio:"12/5", scrollbarWidth: "none", padding: "0px" }}
        >
          <CarouselContent className="flex" style={{ scrollbarWidth: "none" }}>
            {movies.map((el, i) => {
              return (
                <CarouselItem key={i} className="w-screen aspect-12/5">
                  <NowPlaying
                    title={el.title}
                    overview={el.overview}
                    poster_path={
                      "https://image.tmdb.org/t/p/original" + el.backdrop_path
                    }
                    vote_average={el.vote_average.toFixed(1)}
                    vote_count={el.vote_count}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-3" />
          <CarouselNext className="absolute top-1/2 right-3" />
        </Carousel>

        <div
          className="max-w-screen h-fit flex flex-col justify-center px-10"
        >
          <div className="flex items-center justify-between p-4">
            <h1 className="p-4" style={{ fontWeight: "500", fontSize: "20px" }}>
              Upcoming
            </h1>
            <Button
              className="bg-transparent text-black w-30"
              onClick={() => {
                setVisibleCount(upcoming.length);
              }}
            >
              See More
            </Button>
          </div>
          <div className="px-10 py-4 grid grid-cols-5 grid-rows-2" style={{gap:"2.5%"}}>
            {upcoming.slice(0, visibleCount).map((el, i) => {
              return (
                <DVDcard
                  key={3}
                  poster_path={
                    "https://image.tmdb.org/t/p/original" + el.poster_path
                  }
                  title={el.title}
                  vote_average={el.vote_average}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-between p-4">
            <h1 className="p-4" style={{ fontWeight: "500", fontSize: "20px" }}>
              Popular
            </h1>
            <Button
              className="bg-transparent text-black w-30"
              onClick={() => {
                setVisibleCount(popular.length);
              }}
            >
              See More
            </Button>
          </div>

          <div className="w-full px-10 py-4 gap-10 grid grid-cols-5 grid-rows-2">
            {popular.slice(0, visibleCount).map((el, i) => {
              return (
                <DVDcard
                  key={i}
                  poster_path={
                    "https://image.tmdb.org/t/p/original" + el.poster_path
                  }
                  title={el.title}
                  vote_average={el.vote_average}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-between p-4">
            <h1 className="p-4" style={{ fontWeight: "500", fontSize: "20px" }}>
              Top-Rated
            </h1>
            <Button
              className="bg-transparent text-black w-30"
              onClick={() => {
                setVisibleCount(toprated.length);
              }}
            >
              See More
            </Button>
          </div>

          <div className="w-full px-10 py-4 gap-10 grid grid-cols-5 grid-rows-2">
            {toprated.slice(0, visibleCount).map((el, i) => {
              return (
                <DVDcard
                  key={i}
                  poster_path={
                    "https://image.tmdb.org/t/p/original" + el.poster_path
                  }
                  title={el.title}
                  vote_average={el.vote_average}
                />
              );
            })}
          </div>
        </div>

        <footer className="bg-indigo-700 w-screen min-w-300 h-70"></footer>
      </div>
    </>
  );
};

export default HomePage;
