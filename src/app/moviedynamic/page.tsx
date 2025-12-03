"use client";

import { Children } from "react";
import { BaseStructure } from "../_components/BaseStructure";
import { NowPlaying } from "../_components/nowplaying";
import { Shelf } from "../_components/shelf";


const DynMoviePage = () => {
  return (
    <>
      <BaseStructure>
        <NowPlaying />
        <Shelf category="popular" title="Popular" />
        <Shelf category="upcoming" title="Upcoming" />
        <Shelf category="top_rated" title="Top Rated" />
      </BaseStructure>
    </>
  );
};
export default DynMoviePage;
