"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { DVDcard } from "./dvdcard";
import { MovieTypes } from "./movietypes";
export const SearchSection = () => {
  const [value, setValue] = useState(""); // what user types
  const [query, setQuery] = useState(""); // actual search term
  const [results, setResults] = useState([]); // array of movies
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();

  // Run search when query or page changes
  useEffect(() => {
    if (!query) return;
    // const movieData = async() => {
    //   try {
    //     const res = await fetch(`${process.env.TMDB_BASE_URL}`))
    //   }
    // }
    const searchResults = async () => {
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/search/movie?query=${query}&language=en-US&page=${page}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.API_KEY}`,
            },
          }
        );

        const data = await res.json();
        if (!res.ok) console.log("res not ok");

        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    searchResults();
  }, [query, page]);

  // When user clicks search:
  function runSearch() {
    setQuery(value);
    return (
      <div
        style={{
          position: "absolute",
          width: "20%",
          height: "95vh",
          zIndex: 99,
          backgroundColor: "white",
          overflow: "scroll",
        }}
      >
        <div className="overflow-scroll">
          {results.map((movie: any) => (
            <div className="p-4">{movie.title}</div>
          ))}
        </div>
      </div>
    ); // this triggers the effect
  }
  // function showresults() {
  //   return (
  //     <>
  //     <div className="w-[30%] h-fit ">
  //       {results.map((movie, id) => (
  //         <DVDcard
  //         id={movie.id}
  //         key={id}
  //         title={movie.title}
  //         >

  //         </DVDcard>
  //       ))}
  //     </div>
  //     </>
  //   )
  // }
  return (
    <>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value) {
            runSearch();
          }
        }}
        placeholder="Search movies..."
      />

      <button onClick={runSearch}>Search</button>

      {/* Example results */}
      <div
        style={{
          position: "absolute",
          width: "20%",
          height: "95vh",
          zIndex: 99,
          backgroundColor: "white",
          overflow: "scroll",
        }}
      >
        <div className="overflow-scroll">
          {results.map((movie: any) => (
            <div className="p-4">{movie.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SearchSection;
