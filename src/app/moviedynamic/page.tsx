"use client";

import { Children } from "react";
import { BaseStructure } from "../_components/BaseStructure";
import { NowPlaying } from "../_components/nowplaying";


const DynMoviePage = () => {
  return (
    <>
      <BaseStructure>
      <NowPlaying/>
      </BaseStructure>
    </>
  );
};
export default DynMoviePage;
