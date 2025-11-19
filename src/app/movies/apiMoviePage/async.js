const getData = async () => {
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

  console.log(response);
};

getData();


