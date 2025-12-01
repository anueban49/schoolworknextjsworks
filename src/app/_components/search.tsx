import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
function Search() {
  const [value, setValue] = useState("");
  const searchItems = () => {

  }

  return (
    <Input type="text" onChange={searchItems}/>
  )
}

