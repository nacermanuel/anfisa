"use client";

import Image from "next/image";
import React, { useState } from "react";
import searchSvg from "../../public/svg/search.svg";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const cahnge = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white flex gap-2 items-center shadow-md rounded-s-full rounded-e-full p-2"
    >
      <button className="mx-2">
        <Image src={searchSvg} alt="search" />
      </button>
      <input
        type="search"
        className="border-none outline-none text-gray-400 placeholder-gray-300 w-full"
        placeholder="¿Que producto necesitas?"
        name="search"
        onChange={cahnge}
      />
    </form>
  );
};

export default Search;
