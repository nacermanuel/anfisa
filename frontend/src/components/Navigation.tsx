import React from "react";
import Search from "./Search";
import cardSvg from "../../public/svg/card.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between gap-2 flex-wrap">
      <div className="w-[8rem]"><img src="https://anfisa-catalogo.web.app/static/media/logo.33915a446bfcbaead873.png" alt="" /></div>
      <div className="w-4/5 max-[800px]:w-full max-[800px]:order-last mx-auto">
        <Search />
      </div>
      <div className="w-[3rem] bg-pink-300 p-2 flex justify-center rounded-full relative hover:cursor-pointer hover:shadow-md">
        <Image src={cardSvg} alt="card" width="20" height="20" />
        <span className="bg-slate-200 rounded-full w-5 h-5 absolute top-0 right-[-0.5rem] flex justify-center items-center">
          <b>2</b>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
