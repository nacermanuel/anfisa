"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import closeSvg from "../../public/svg/close.svg";
import style from "./slide.module.css";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
}

const SideBar = ({ setActive, active }: Props) => {
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={`drawer-overlay flex justify-end w-screen h-screen absolute top-0 left-0 z-10 ${
        active ? `block` : "hidden"
      }`}
    >
      <div className="w-[24rem] max-[500px]:w-[18rem] h-screen bg-white p-2">
        <div className="flex">
          <button
            className="w-[2rem] h-[2rem] rounded-full bg-pink-400 hover:bg-pink-300 transition duration-300 flex justify-center items-center shadow-md"
            onClick={handleActive}
          >
            <Image src={closeSvg} alt="close" />
          </button>
          <p className="w-4/5 text-center text-2xl font-bold capitalize">
            carrito
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
