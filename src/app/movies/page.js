"use client";
import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Fullscreen } from "lucide-react";
const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Crime",
  "Comedy",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "War",
  "Western",
];
const banner = [
  {
    src: "/movie/banner/gladlong.png",
    title: "Gladiator",
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
  },
  {
    src: "/movie/banner/moanalong.jpg",
    title: "Moana",
    description:
      "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the Demigod to set things right.",
  },
  {
    src: "/movie/banner/wickedlong.jpg",
    title: "Wicked",
    description:
      "The story of the witches of Oz before Dorothy dropped in. Elphaba, the future Wicked Witch of the West, and Glinda, the Good Witch, meet as sorority roommates at Shiz University. Despite their initial differences, they form a powerful bond that ultimately transforms them both.",
  },
];
const media = [
  {
    src: "/movie/media/dvd1.png",
    title: "Movie 1",
    description: "Description for Movie 1",
  },
  {
    src: "/movie/media/dvd2.png",
    title: "Movie 2",
    description: "Description for Movie 2",
  },
  {
    src: "/movie/media/dvd3.png",
    title: "Movie 3",
    description: "Description for Movie 3",
  },
  {
    src: "/movie/media/dvd4.png",
    title: "Movie 4",
    description: "Description for Movie 4",
  },
  {
    src: "/movie/media/dvd5.png",
    title: "Movie 5",
    description: "Description for Movie 5",
  },
  {
    src: "/movie/media/dvd6.png",
    title: "Movie 6",
    description: "Description for Movie 6",
  },
  {
    src: "/movie/media/dvd7.png",
    title: "Movie 7",
    description: "Description for Movie 7",
  },
  {
    src: "/movie/media/dvd8.png",
    title: "Movie 7",
    description: "Description for Movie 7",
  },
  {
    src: "/movie/media/dvd9.png",
    title: "Movie 7",
    description: "Description for Movie 7",
  },
  {
    src: "/movie/media/dvd10.png",
    title: "Movie 7",
    description: "Description for Movie 7",
  },
];
const Header = () => {
  return (
    <>
      <div className="w-full h-16 flex gap-4 items-center px-4 bg-gray-800">
        <span>
          <img src="/movies/icon/Logo.jpg"  />
        </span>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="w-20" placeholder="Genres" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>
              {genres.map((item, index) => (
                <SelectItem key={index}>{item}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="Search movies..."></Input>
      </div>
    </>
  );
};
console.log(banner.title);
const PromoBanner = () => {
  return (
    <>
      <div className="h-[600px] w-full flex overflow-x-scroll">
        <div className="w-full h-150 flex">
          {banner.map((item, index) => (
            <div
              className="w-full h-150 bg-cover bg-no-repeat bg-center overflow-hidden relative"
              key={index}
            >
              <img
                src={item.src}
                className="w-full aspect-12/5 object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h1 className="text-red text-white">{item.title}</h1>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Shelf = ({ children }) => {
  return (
    <div className="w-full h-280 grid grid-cols-5 grid-rows-2">{children}</div>
  );
};

const Footer = ({children}) => {
  return <>{children}</>;
};
const MoviesPage = () => {
  return (
    <>
      
        <Header></Header>
        <PromoBanner className="w-full h-200"></PromoBanner>
        <RadioGroup className="flex justify-center mt-4 space-x-2">
          <RadioGroupItem></RadioGroupItem>
          <RadioGroupItem></RadioGroupItem>
          <RadioGroupItem></RadioGroupItem>
        </RadioGroup>
        <h1>Upcoming</h1>
        <Shelf>
          
          {media.map((item, index) => (
            <div key={index} className="p-4 flex flex-col gap-2">
              <img src={item.src} alt={item.title} className="w-full aspect-5/8 object-cover" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Shelf>
        <h1>Popular</h1>
        <Shelf>
          {media.map((item, index) => (
            <div key={index} className="p-4 flex flex-col gap-2">
              <img src={item.src} alt={item.title} className="w-full aspect-5/8 object-cover" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Shelf>
        <h1>Top Rated</h1>
        <Shelf>
          {media.map((item, index) => (
            <div key={index} className="p-4 flex flex-col gap-2">
              <img src={item.src} alt={item.title} className="w-full aspect-5/8 object-cover" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Shelf>
        <Footer className="w-full h-100 bg-purple-500"></Footer>
     
    </>
  );
};
export default MoviesPage;
