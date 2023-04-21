import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import closeSvg from "../../public/svg/close.svg";
import CardSidebar from "./CardSidebar";
import { mockcart } from "@/mock/mockcart";
import { ModelCart } from "@/models/ModelCart";
import style from "./slideBar.module.css";

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
      className={`drawer-overlay flex justify-end w-screen min-h-screen fixed top-0 left-0 z-10 ${
        active ? `block` : "hidden"
      }`}
    >
      <div className="w-full bg-stone-600 opacity-95"></div>
      <div className="flex flex-col justify-center items-center w-[24rem] max-[500px]:w-[21rem] h-screen bg-white">
        <div className="flex p-2 w-full items-center bg-white">
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

        <ul className={`h-full p-1 ${style.contenedorScroll} my-1`}>
          {mockcart.map((cart: ModelCart) => (
            <CardSidebar key={cart.id} data={cart} />
          ))}
        </ul>

        <div className="flex flex-col justify-center gap-1 px-4 py-4 text-sm w-full max-[500px]:w-full h-[9rem] bg-pink-200">
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold">Total productos:</p>
            <p className="text-lg text-gray-600 font-semibold">
              {mockcart.length}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold">Total a pagar:</p>
            <p className="text-xl font-bold text-pink-400">$ 25555000</p>
          </div>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
