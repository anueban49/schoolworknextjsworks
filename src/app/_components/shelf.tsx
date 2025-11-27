import { Button } from "@/components/ui/button";

import { useState, useEffect, ReactNode } from "react";
type ShelfProps = {
  category: string;
  title: string;
  elements: object;
  arraylength: number;
  button: boolean;
};
export const Shelf = (props: ShelfProps) => {
  const [visibleCount, setVisibleCount] = useState(10);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, {
          headers: {
            
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="p-4" style={{ fontWeight: "500", fontSize: "20px" }}>
          {props.title}
        </h1>
        {visibleCount < props.arraylength && (
          <button
            className="bg-transparent text-black w-30"
            onClick={() => {
              setVisibleCount(props.arraylength);
            }}
          >
            See More
          </button>
        )}
      </div>

      <div className="DVDshelf, w-full px-10 py-4 gap-10 grid grid-cols-5 grid-rows-2">
        {props.elements}
      </div>
    </>
  );
};
