"use client";
import { React } from "react";
import { Link } from "react";
import { Image } from "next/image";

// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fullscreen } from "lucide-react";
const Search = () => {};
const Header = ({ logo, searchbar, toggletheme }) => {
  return (
    <>
      <div className="w-full h-12 bg-gray-500 p-4">
        {logo}
        {searchbar}
        {toggletheme}
      </div>
    </>
  );
};
const banner = [
  "movie/gladlong.png",
  "movie/moanalong.jpg",
  "movie/wickedlong.jpg",
];

const PromoBanner = ({ children }) => {
  return (
    <>
      <div className="w-full aspect-12/5 bg-gray-300 flex">
        <Carousel>
          <CarouselNext />
          <CarouselContent>
            <CarouselItem>
              {banner.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Image ${index}`}
                  width={Fullscreen}
                  height={600}
                />
              ))}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
        </Carousel>
      </div>
    </>
  );
};
const Shelf = ({ title, Media }) => {
  return (
    <>
      <div className="w-full grid grid-cols-5 grid-rows-3 gap-2 p-4">
        <div className="w-full flex items-around">
          <h2>{title}</h2>
        </div>

        {Media}
      </div>
    </>
  );
};
  const media = [
    "/movie/media/Slide 4_3 - 1-1.png",
    "/movie/media/Slide 4_3 - 1-2.png",
    "/movie/media/Slide 4_3 - 1-3.png",
    "/movie/media/Slide 4_3 - 1-4.png",
    "/movie/media/Slide 4_3 - 1-5.png",
    "/movie/media/Slide 4_3 - 1-6.png",
    "/movie/media/Slide 4_3 - 1-7.png",
    "/movie/media/Slide 4_3 - 1-8.png",
    "/movie/media/Slide 4_3 - 1-2.png",
    "/movie/media/Slide 4_3 - 1.png",
  ];
const Media = ({ name, rating, genre, duration, link }) => {

  return (
    <>
      <div className=""></div>
    </>
  );
};
const Title = ({ text }) => {
  return (
    <>
      <h>{text}</h>
      <Button>See More</Button>
    </>
  );
};
export default function HomePage() {
  return (
    <>
      <div className="box-border margin-0 flex flex-col gap-4">
        <Header></Header>
        <PromoBanner></PromoBanner>
        <Shelf>
          {media.map((src, index) => (
            
              <img
                key={index}
                src={src}
                alt={`Image ${index}`}

              />
            
          ))}
        </Shelf>
        <Shelf></Shelf>
        <Shelf></Shelf>
      </div>
    </>
  );
}
