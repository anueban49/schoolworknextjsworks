import { Movie } from "../movies/page";

export type MovieType = {
  id: number;
  title: string;
  image: string;
  overview: string;
  genre: number[];
  vote_average: number;
};

const getMovieData = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiZDAxNWU5ZDZjNTA1ZGU0ZmEyNDhiMWYyMDkzYyIsIm5iZiI6MTc2MzUyNDE0NC40NjcsInN1YiI6IjY5MWQzZTMwYmIxOTJjNzRiZTdhZDZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UKzUZ8eqp_d8_1_19PSwL4iBXV2c5qiM0DyUXwAGCzo",
      },
    }
  );

  return response.results;
};
export default getMovieData;
