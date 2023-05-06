"use client";

import { ModelProduct } from "@/models/ModelProduct";
import React, { useState } from "react";
import cardSvg from "../../public/svg/card.svg";
import Image from "next/image";
import Link from "next/link";

import { ModelCart } from "@/models/ModelCart";

interface Props {
  data: ModelProduct;
}

const CardProduct = ({ data }: Props) => {
  const [amount, setAmount] = useState(1);
  const [addCar, setAddCar] = useState(false);

  const incrementalAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreasingAmount = () => {
    setAmount((prevAmount) => prevAmount - 1);
    if (amount < 2) setAmount(1);
  };

  const handleCart = () => {
    setAddCar(true);
    let enLocal = localStorage.getItem("cart");
    if (enLocal !== null) {
      let previo = JSON.parse(enLocal);
      let nuevo = [
        ...previo.filter((e: ModelCart) => e.id !== data.id),
        {
          id: data.id,
          name: data.name,
          price: data.price,
          amount: data.amount,
          image: data.image,
          brand: data.brand,
          category: data.category,
          cartAmount: amount,
        },
      ];
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify(nuevo));
    } else {
      let nuevo = [
        {
          id: data.id,
          name: data.name,
          price: data.price,
          amount: data.amount,
          image: data.image,
          brand: data.brand,
          category: data.category,
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
    <div className="w-[1fr] bg-white flex flex-col justify-center items-center hover:shadow-lg hover:cursor-pointer hover:scale-[1.01] rounded-xl">
      <div className="h-full flex flex-col justify-between">
        <div className="p-2">
          <Link href={`/products/${data.id}`}>
            <div className="flex justify-center">
              <img className="my-3 mx-auto" src={data.image} alt={data.name} />
            </div>
            <div className="w-full p-2 px-4">
              <p className="uppercase text-sm text-gray-300 font-bold">
                {data.category}
              </p>
              <p className="font-bold text-lg capitalize">{data.name}</p>
              <p className="uppercase text-sm text-gray-300 font-bold">
                {data.brand}
              </p>
              <p className="flex gap-1 items-center mt-3">
                <span className="font-bold text-gray-400 text-xs">Stock:</span>
                <span
                  className={`w-2 h-2 rounded-full ml-1 ${
                    data.available === true ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="text-xs">
                  {data.available ? "Disponible" : "No disponible"}
                </span>
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <p className="text-pink-500 font-bold text-lg pl-5">$ {data.price}</p>
          <div className="w-full flex gap-2 mt-1 mb-2 pl-5">
            <div>
              <button
                onClick={decreasingAmount}
                className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer p-1 "
              >
                -
              </button>
              <span className="w-[2rem] border inline-block text-center hover:cursor-default p-1">
                {amount}
              </span>
              <button
                onClick={incrementalAmount}
                className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer p-1"
              >
                +
              </button>
            </div>
            <button
              onClick={handleCart}
              className="w-[2.5rem] bg-slate-200 hover:bg-pink-400 transition duration-300 p-1 flex justify-center items-center relative hover:cursor-pointer hover:shadow-md"
            >
              <Image src={cardSvg} alt="card" width="20" height="20" />
            </button>
          </div>

          <p
            className={`w-full h-[1.1rem] flex items-center text-xs font-bold pl-4 rounded-b-xl ${
              addCar === true && "bg-green-200 text-black text"
            }`}
          >
            {addCar === true && <span> Añadido al carrito </span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
