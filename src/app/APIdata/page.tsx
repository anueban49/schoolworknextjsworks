"use client";
import { useEffect, useState } from "react";
import { MovieTypes } from "../_components/movietypes";

export type DataTypes = {
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
export type GenreTypes = {
  id: number;
  name: string;
};
const AUTH_HEADERS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};
const fetchJSON = (url: any) => {
  return fetch(url, AUTH_HEADERS).then((res) => res.json());
};
const dataPage = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [genres, setGenres] = useState<GenreTypes[]>([]);
  const [movieIds, setMovieIds] = useState<GenreTypes[]>([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const [movieData, genreData] = await Promise.all([
          fetchJSON(
            `${process.env.TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`
          ),
          fetchJSON(
            `${process.env.TMDB_BASE_URL}/genre/movie/list?language=en`
          ),
        ]);

        setMovies(movieData.results.genre_ids);

        setGenres(genreData.genres);
        console.log(movies);
        console.log(genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getMovieData();
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <div>{movie.genre_ids}</div>
      ))}
      {genres.map((genre, id) => (
        <div>
          {genre.id} {genre.name}
        </div>
      ))}
    </>
  );
};
export default dataPage;
