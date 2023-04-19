import Image from "next/image";
import React from "react";
import searchSvg from "../../public/svg/search.svg";

const Search = () => {
  return (
    <form className="bg-white flex gap-2 items-center shadow-md rounded-s-full rounded-e-full p-1">
      <button className="mx-2">
        <Image src={searchSvg} alt="search" />
      </button>
      <input
        type="text"
        className="border-none outline-none text-gray-400 placeholder-gray-300 w-full"
        placeholder="¿Que producto necesitas?"
      />
    </form>
  );
};

export default Search;
