import Image from "next/image";
import React, { useState } from "react";
import cardSvg from "../../../../../public/svg/card.svg";
import carClose from "../../../../../public/svg/carClose.svg";
import { ModelCart } from "@/models/ModelCart";

interface Props {
  data: any;
}

const CardDetailProduct = ({ data }: Props) => {
  const [item, setItem] = useState(data);
  const [amount, setAmount] = useState(1);
  const [addCar, setAddCar] = useState(false);

  const incrementalAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decreasingAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const handleCart = () => {
    setAddCar(true);
    let enLocal = localStorage.getItem("cart");
    if (enLocal !== null) {
      let previo = JSON.parse(enLocal);
      let nuevo = [
        ...previo.filter((e: ModelCart) => e.id !== data.id),
        {
          id: item.id,
          name: item.name,
          price: item.price,
          amount: item.amount,
          image: item.image,
          brand: item.brand,
          category: item.category,
          cartAmount: amount,
        },
      ];
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify(nuevo));
    } else {
      let nuevo = [
        {
          id: item.id,
          name: item.name,
          price: item.price,
          amount: item.amount,
          image: item.image,
          brand: item.brand,
          category: item.category,
          cartAmount: amount,
        },
      ];
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify(nuevo));
    }

    setTimeout(() => {
      setAddCar(false);
    }, 2000);
  };

  return (
    <div>
      <div className=" py-10 px-6 border">
        <div className="w-full p-2 px-4 flex flex-col gap-4">
          <p className="font-bold text-3xl capitalize border-b-2 pb-4">
            {data.name}
          </p>
          <div>
            <p className="uppercase text-sm text-gray-300 font-bold">
              {data.category}
            </p>
            <p className="uppercase text-sm text-gray-300 font-bold">
              {data.brand}
            </p>
          </div>
          <p className="text-pink-500 font-bold text-2xl">$ {data.price}</p>
          <p>
            <span className="font-bold text-gray-400">Market</span> producto
            vendido y distribuido por{" "}
            <span className="font-bold text-pink-400 uppercase">anfisa</span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold text-gray-400">Stock:</span>
            <span
              className={`w-2 h-2 rounded-full ml-5 ${
                data.available ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span>{data.available ? "Disponible" : "No disponible"}</span>
          </p>
        </div>
        <div className="my-8 w-full flex gap-3">
          <div>
            <button
              onClick={decreasingAmount}
              className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer p-1 "
            >
              -
            </button>
            <span className="w-[3rem] border inline-block text-center hover:cursor-default p-1">
              {amount}
            </span>
            <button
              onClick={incrementalAmount}
              className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer p-1"
            >
              +
            </button>
          </div>
          {data.available === true ? (
            <button
              onClick={handleCart}
              className="w-[2rem] bg-slate-200 hover:bg-pink-400 transition duration-300 p-1 flex justify-center items-center relative hover:cursor-pointer hover:shadow-md"
            >
              <Image src={cardSvg} alt="card" width="20" height="20" />
            </button>
          ) : (
            <div className="relative text-transparent hover:text-black">
              <p className="absolute text-xs bottom-10 left-[-1.9rem] w-[5rem]">
                No disponible
              </p>
              <button className="w-[2rem] hover:bg-slate-300 transition duration-300 p-1 flex justify-center items-center relative hover:cursor-pointer hover:shadow-md">
                <Image src={carClose} alt="card" width="22" height="22" />
              </button>
            </div>
          )}
        </div>
      </div>
      <p
        className={`w-full h-[1.1rem] flex items-center text-xs font-bold pl-4 rounded-b-xl ${
          addCar === true && "bg-green-200 text-black text"
        }`}
      >
        {addCar === true && <span> Añadido al carrito </span>}
      </p>
    </div>
  );
};

export default CardDetailProduct;
