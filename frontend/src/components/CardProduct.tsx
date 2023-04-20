"use client";

import { ModelProduct } from "@/models/ModelProduct";
import React, { useState } from "react";
import { mockProduct as data } from "@/mock/mockproduct";
import cardSvg from "../../public/svg/card.svg";
import Image from "next/image";

interface Props {
  data: ModelProduct;
}

const CardProduct = () => {
  const [amount, setAmount] = useState(1);
  const [cart, setCart] = useState({});

  const incrementalAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreasingAmount = () => {
    setAmount((prevAmount) => prevAmount - 1);
    if (amount < 2) setAmount(1);
  };

  const handleCart = () => {
    setCart({ ...data, amount });
    console.log(cart);
  };

  return (
    <div className="m-[20rem] w-[18rem] bg-white p-2 flex flex-col justify-center items-center hover:shadow-lg hover:cursor-pointer hover:scale-[1.01] ">
      <div className="">
        <img
          className="my-5"
          src={data.image}
          alt={data.name}
          width={250}
          height={250}
        />
      </div>
      <div className="w-full p-2 px-4">
        <p className="uppercase text-sm text-gray-300 font-bold">
          {data.category}
        </p>
        <p className="font-bold text-lg capitalize">{data.name}</p>
        <p className="uppercase text-sm text-gray-300 font-bold">
          {data.brand}
        </p>
        <p className="text-pink-500 font-bold text-lg">$ {data.price}</p>
        <p>{data.avalible}</p>
      </div>
      <div className="my-2 ml-5 w-full flex gap-3">
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
        <button
          onClick={handleCart}
          className="w-[3rem] bg-slate-200 hover:bg-pink-400 transition duration-300 p-1 flex justify-center  relative hover:cursor-pointer hover:shadow-md"
        >
          <Image src={cardSvg} alt="card" width="20" height="20" />
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
