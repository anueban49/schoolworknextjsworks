type ShelfProps = {
  title: string;
  elements: any[];
};
import { Button } from "@/components/ui/button";
import { DVDcard } from "./dvdcard";
import { useState } from "react";
export const Shelf = (props: ShelfProps) => {
  const [visibleCount, setVisibleCount] = useState(10);
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="p-4" style={{ fontWeight: "500", fontSize: "20px" }}>
          {props.title}
        </h1>
        {visibleCount < props.elements.length && (
          <Button className="bg-transparent text-black w-30"
          onClick={() => {setVisibleCount(props.elements.length)}}>
            See More
          </Button>
        )}
      </div>

      <div className="DVDshelf, w-full px-10 py-4 gap-10 grid grid-cols-5 grid-rows-2">
        {props.elements}
      </div>
    </>
  );
};
