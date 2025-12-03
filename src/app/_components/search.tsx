'use client';
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export const Search = () => {
  const [value, setValue] = useState("");
  const fetchData = () => {
    useEffect = async() => {
      try {
        fetch(`${process.env.API_BASE_URL}`)
      }
    }
  }
  return <Input 
  type="text" 
  value={value} 
  onChange={(e)=> {
    setValue(e.target.value)
  console.log(value)}} />;
};

///search/movie?query=${searchValue}&language=en-US&page=${page}

