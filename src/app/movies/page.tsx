"use client";

import * as React from "react";

import { MediaDVD } from "@/app/_components/MediaDVD";
import { useState, useEffect } from "react";
// import { Select, SelectItem } from "@/components/ui/select";
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id?: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: any;
  vote_count: number;
};

type Response = {
  page: number;
  result: Movie[];
  total_pages: number;
  total_results: number;
};
const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetch(
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
      const response = await res.json();
      setMovies(response.results);
    };

    getMovieData();
  }, []);

  return (
    <>
      <div className="border-box w-screen h-fit flex flex-col gap-4">
        <div className="w-full h-10">
          <span></span>

          <input />
          <span></span>
        </div>
        <div className="w-full aspect-12/5 overflow-x-scroll">
          <div className="w-fit flex">
            {movies.map((el, i) => {
              return (
                <MediaDVD
                  title={el.title}
                  overview={el.overview}
                  poster_path={
                    "https://image.tmdb.org/t/p/original" + el.backdrop_path
                  }
                  vote_average={el.vote_average.toFixed(1)}
                  vote_count={el.vote_count}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

// import Image from "next/image";

// import { Input } from "@/components/ui/input";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Fullscreen } from "lucide-react";
// import{ Moon } from "lucide-react";
// import { Star } from "lucide-react";

// const genres = [
//   "Action",
//   "Adventure",
//   "Animation",
//   "Biography",
//   "Crime",
//   "Comedy",
//   "Documentary",
//   "Drama",
//   "Family",
//   "Fantasy",
//   "Film-Noir",
//   "History",
//   "Horror",
//   "Music",
//   "Musical",
//   "Mystery",
//   "Romance",
//   "Sci-Fi",
//   "Sport",
//   "Thriller",
//   "War",
//   "Western",
// ];
// import { Button } from "@/components/ui/button";
// import promotion from "@/app/movies/promotion.json";
// if (promotion) {console.log("banner data found")}
// import movies from "@/app/movies/dvd.json";
// export function GET() {
//   return new Response(JSON.stringify(movies), {
//     headers: { "Content-Type": "application/json" },
//   })
// }
// const res = await fetch("/movies")
// const movieDatas = await res.json();

// import { MediaDVD } from "@/app/_components/MediaDVD";

// const MoviesPage = () => {
//   return (
//     <>
//     <Select></Select>
//     </>
//   )
// }
// export default MoviesPage;

// const Header = () => {
//   return (
//     <>
//       <div className="w-full h-16 flex gap-4 items-center justify-between px-4 bg-gray-800">
//         <span>
//           <Image src="/movie/icons/logo.jpg" width={100} height={30} alt=""/>
//         </span>
//         <div className="flex">
//           <Select >
//             <SelectTrigger className="w-[180px]">
//               <SelectValue className="w-20" placeholder="Genres" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Genres</SelectLabel>
//                 {genres.map((item, index) => (
//                   <SelectItem value="" key={index}>{item}</SelectItem>
//                 ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//           <Input placeholder="Search movies..."></Input>
//         </div>

//         <Button><Moon/></Button>
//       </div>
//     </>
//   );
// };

// const PromoBanner = () => {
//   return (
//     <>
//       <div className=" w-full flex overflow-x-scroll scrollbar-hide">
//         <div className="w-full flex scrollbar-hide">
//           {banner.map((item, index) => (
//             <div
//               className="w-full aspect-12/5 shrink-0 relative scrollbar-hide"
//               key={index}
//               style={{
//                 backgroundImage: `url(${item.src})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <h1 className="text-white text-[36px]">{item.title}</h1>
//               <Rating
//                style={{ color: "yellow", fill: "yellow"}}
//                num={4.5}
//               ></Rating>
//               <p style={{color: "white"}}>{item.description}</p>
//               <Button></Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// const Shelf = ({ children }) => {
//   return (
//     <div className="w-full h-fit grid grid-cols-5 grid-rows-2">{children}</div>
//   );
// };
// const Rating = ({num, style}) => {
//   return (
//     <>
//       <div className="flex flex-row gap-2">
//         <Star {...style} />
//         <p>{num}/10</p>
//       </div>
//     </>
//   );
// };
// const Footer = ({ children }) => {
//   return <>{children}</>;
// };
// const MoviesPage = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center font-sans">
//         <Header></Header>
//         <PromoBanner></PromoBanner>
//         <div className="container flex flex-col gap-4 ">
//           <RadioGroup className="flex justify-center mt-4 space-x-2">
//             <RadioGroupItem></RadioGroupItem>
//             <RadioGroupItem></RadioGroupItem>
//             <RadioGroupItem></RadioGroupItem>
//           </RadioGroup>
//           <h1>Upcoming</h1>
//           <Shelf>
//             {media.map((item, index) => (
//               <div key={index} className="p-4 flex flex-col gap-2">
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="w-full aspect-5/8 object-cover"
//                 />
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </Shelf>
//           <h1>Popular</h1>
//           <Shelf>
//             {media.map((item, index) => (
//               <div key={index} className="p-4 flex flex-col gap-2">
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="w-full aspect-5/8 object-cover"
//                 />
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </Shelf>
//           <h1 className="">Top Rated</h1>
//           <Shelf>
//             {media.map((item, index) => (
//               <div key={index} className="p-4 flex flex-col gap-2">
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="w-full aspect-5/8 object-cover"
//                 />
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </Shelf>
//           <Footer className="w-full h-100 bg-purple-500"></Footer>
//         </div>
//       </div>
//     </>
//   );
// };
// export default MoviesPage;
