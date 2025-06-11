"use client"

import queryString from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = ()=>{
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!value) return

    const url = queryString.stringifyUrl({
      url: "/",
      query: { term: value},
    }, {skipEmptyString: true});

    router.push(url);
  }

  const onClear = ()=>{
    setValue("");
  }
  return (
    <form onSubmit={onSubmit} 
    className="relative w-full lg:w-[400px] flex items-center">
      <Input
      value={value ?? ""}
      placeholder="Search" 
      onChange={(e)=>{setValue(e.target.value)}}
      className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent
      focus-visible:ring-offset-0
      focus-visible:border-[#3B82F6]
      border-[#2D3748]
      bg-[#1A1D23]"/>
      {value && (<X className="x-btn rounded-[50%] cursor-pointer hover:opacity-65" onClick={onClear}/>)}

      <Button className="rounded-l-none cursor-pointer hover:bg-[var(--logo-clr)]" type="submit"><SearchIcon/></Button>
    </form>
  );
}

export default Search;