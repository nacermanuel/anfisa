import { ModelCart } from "@/models/ModelCart";
import Image from "next/image";
import deleteSvg from "../../public/svg/delete.svg";
import { useState } from "react";

interface Props {
  data: ModelCart;
}

const CardSidebar = ({ data }: Props) => {
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(data.price);

  const incrementalAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);

    setTotal(amount * data.price + data.price);
  };

  const decreasingAmount = () => {
    setAmount((prevAmount) => prevAmount - 1);
    if (amount < 2) setAmount(1);

    if (amount > 1) setTotal(amount * data.price - data.price);
  };

  return (
    <div className="flex justify-center gap-1 py-2 my-3 px-1 text-sm w-[21rem] max-[500px]:w-[18rem] shadow-md border">
      <div className="flex items-center">
        <img src={data.image} alt={data.name} height={80} width={80} />
      </div>
      <div>
        <div className="capitalize">
          <p className="font-bold">{data.name}</p>
          <p>{data.category}</p>
          <p>{data.brand}</p>
        </div>
        <p className="text-pink-500 font-semibold">$ {data.price}</p>
        <div className="flex justify-between mt-2">
          <p className="font-bold text-gray-400">Total por producto:</p>
          <p className="text-pink-500 font-semibold">$ {total}</p>
        </div>
        <div className=" mx-auto">
          <span
            onClick={decreasingAmount}
            className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer"
          >
            -
          </span>
          <span className="w-[3rem] border inline-block text-center hover:cursor-default">
            {amount}
          </span>
          <span
            onClick={incrementalAmount}
            className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer"
          >
            +
          </span>
        </div>
      </div>
      <button className="w-[2rem] h-[2rem] mt-2 rounded-full bg-pink-400 hover:bg-pink-300 transition duration-300 flex justify-center items-center shadow-md">
        <Image src={deleteSvg} alt="close" />
      </button>
    </div>
  );
};

export default CardSidebar;
