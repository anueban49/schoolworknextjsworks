// 'use client';
// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { headers } from "next/headers";
// import { useSearchParams } from "next/navigation";

// export const searchSection = () => {
//   const [value, setValue] = useState("");
//   const [searchValue, setSearchValue] = useState("");
//   const searchParams = useSearchParams();
//   useEffect(() => {
//     const searchResults = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.TMDB_BASE_URL}/search/movie?query=${searchValue}&language=en-US&page=${page}`,
//           {
//             headers: {
//               accept: "application/json",
//               Authorization: `Bearer ${process.env.API_KEY}`,
//             },
//           }

//         );
//         const data = await res.json();
//         if (!res.ok) { console.log("res not ok") };
//         setSearchValue(data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     searchResults();
//   }, [searchValue, page]);
//   function search(value: string) {
//     const params = new URLSearchParams(searchParams.toString());
//   }
//   return (
//     <>
//       <Input value={value} ></Input>
//       <button onClick={() => {search}}></button>
//     </>

//   )
// }

// ///search/movie?query=${searchValue}&language=en-US&page=${page}
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { DVDcard } from "./dvdcard";

export const SearchSection = () => {
  const [value, setValue] = useState("");        // what user types
  const [query, setQuery] = useState("");        // actual search term
  const [results, setResults] = useState([]);    // array of movies
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();

  // Run search when query or page changes
  useEffect(() => {
    if (!query) return;

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
    setQuery(value);  // this triggers the effect
  }

  return (
    <>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies..."
      />

      <button onClick={runSearch}>
        Search
      </button>

      {/* Example results */}
      <div>
        {results.map((movie: any) => (
          <DVDcard 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          ></DVDcard>
        ))}
      </div>
    </>
  );
};
export default SearchSection;


