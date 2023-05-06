"use client";

import Search from "./Search";
import cardSvg from "../../public/svg/card.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Link from "next/link";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [car, setCar] = useState(0);

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    setInterval(() => {
      let localS = localStorage.getItem("cart");
      if (localS !== null) {
        let carrito = JSON.parse(localS);
        setCar(carrito.length);
      }
    }, 1000);
  }, []);

  return (
    <nav className="w-full sticky top-0 left-0 z-10 py-6 bg-[#f1f1f1] flex items-center justify-between gap-2 flex-wrap">
      <Link href={"/"} className="w-[8rem]">
        <img
          src="https://anfisa-catalogo.web.app/static/media/logo.33915a446bfcbaead873.png"
          alt=""
        />
      </Link>
      <div className="w-4/5 max-[1010px]:w-full max-[1010px]:order-last mx-auto">
        <Search />
      </div>
      <button
        onClick={handleActive}
        className="w-[3rem] bg-pink-400 hover:bg-pink-300 transition duration-300 p-2 flex justify-center rounded-full relative hover:cursor-pointer hover:shadow-md"
      >
        <Image src={cardSvg} alt="card" width="20" height="20" />
        <span className="bg-slate-200 rounded-full w-5 h-5 absolute top-0 right-[-0.5rem] flex justify-center items-center">
          <b>{car}</b>
        </span>
      </button>
      {active && (
        <SideBar setActive={setActive} active={active} setCar={setCar} />
      )}
    </nav>
  );
};

export default Navigation;
