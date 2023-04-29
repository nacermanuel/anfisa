import { ModelCart } from "@/models/ModelCart";
import Image from "next/image";
import deleteSvg from "../../public/svg/delete.svg";
import { useState, useEffect, use } from "react";

interface Props {
  data: ModelCart;
  deleteProduct: (id: number) => void;
}

const CardSidebar = ({ data, deleteProduct }: Props) => {
  const [item, setItem] = useState(data);

  useEffect(() => {
    let enLocal = localStorage.getItem("cart");
    if (enLocal !== null) {
      //console.log( JSON.parse(enLocal))
      let previo = JSON.parse(enLocal);
      let nuevo = [...previo.filter((e: ModelCart) => e.id !== item.id), item];
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify(nuevo));
    }
  }, [item]);

  const incrementalCartAmount = () => {
    setItem({ ...item, cartAmount: item.cartAmount + 1 });
  };

  const decreasingCartAmount = () => {
    if (item.cartAmount > 1) {
      setItem({ ...item, cartAmount: item.cartAmount - 1 });
    }
  };

  // const handleDelete = (id) =>{

  // }

  return (
    <div className="flex justify-between gap-1 py-2 my-3 text-sm w-[21rem] max-[500px]:w-[20rem] shadow-md border">
      <div className="flex items-center w-[4.8rem]">
        <img src={data.image} alt={data.name} height={80} width={80} />
      </div>
      <div className="w-[14rem]">
        <div className="capitalize">
          <p className="font-bold">{data.name}</p>
          <p>{data.category}</p>
          <p>{data.brand}</p>
        </div>
        <p className="text-pink-500 font-semibold">$ {data.price}</p>
        <div className="flex justify-between mt-2">
          <p className="font-bold text-gray-400">Total por producto:</p>
          <p className="text-pink-500 font-semibold">
            ${" "}
            {typeof item.price === "string"
              ? (item.cartAmount * parseFloat(item.price)).toFixed(2)
              : (item.cartAmount * item.price).toFixed(2)}
          </p>
        </div>
        <div className=" mx-auto">
          <button
            onClick={decreasingCartAmount}
            className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer"
          >
            -
          </button>
          <span className="w-[3rem] border inline-block text-center hover:cursor-default">
            {item.cartAmount}
          </span>
          <button
            onClick={incrementalCartAmount}
            className="w-[2rem] border inline-block text-center font-semibold hover:cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="pr-1">
        <button
          onClick={() => deleteProduct(item.id)}
          className="w-[2rem] h-[2rem] mt-2 rounded-full bg-pink-400 hover:bg-pink-300 transition duration-300 flex justify-center items-center shadow-md"
        >
          <Image src={deleteSvg} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default CardSidebar;
