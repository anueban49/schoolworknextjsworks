"use client";

import { Children } from "react";
import { BaseStructure } from "../_components/BaseStructure";
import { NowPlaying } from "../_components/nowplaying";
import { Shelf } from "../_components/shelf";


const DynMoviePage = () => {
  return (
    <>
      <BaseStructure>
      <NowPlaying></NowPlaying>
      <Shelf></Shelf>
      </BaseStructure>
    </>
  );
};
export default DynMoviePage;
