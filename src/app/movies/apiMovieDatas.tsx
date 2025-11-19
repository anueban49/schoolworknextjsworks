

import Module from "node:module";


const getMovieData = async () => {
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

  if (!response.ok) {console.log("fetching data failed")};
  const raw = await response.json();
  console.log(raw);
  return raw.results.map((m: any) => (
    {
      id: m.id,
      title: m.title,
      image: "https://image.tmdb.org/t/p/w500" + m.poster_path,
      overview: m.overview,
      genre: m.genre.ids[0],
    }
  ))
};
export default getMovieData;



