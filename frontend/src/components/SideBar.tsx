"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import CardSidebar from "./CardSidebar";
import { ModelCart } from "@/models/ModelCart";
import style from "./slideBar.module.css";
import closeSvg from "../../public/svg/close.svg";
import carClose from "../../public/svg/carClose.svg";
import { useState, useEffect } from "react";
import { urlVercel } from "@/config";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
  setCar: Dispatch<SetStateAction<number>>;
  active: boolean;
}

const SideBar = ({ setActive, active, setCar }: Props) => {
  const [data, setData] = useState<ModelCart[]>([]);

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    let localS = localStorage.getItem("cart");
    if (localS !== null) {
      let carrito = JSON.parse(localS);
      setData(carrito);
      setCar(carrito.length);
    }

  }, []);

  const deleteProduct = (id: number) => {
    let localS = localStorage.getItem("cart");
    if (localS !== null) {
      let carrito = JSON.parse(localS);
      let nuevo = [...carrito.filter((e: ModelCart) => e.id !== id)];
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify(nuevo));
      setData(nuevo);
      setCar(nuevo.length);
    }
  };

  const clearCar = () => {
    localStorage.clear();
    setData([]);
    setCar(0);
  };

  const botonMensaje = () => {
    //CAMBIAR URL AL TENER LIVE LA APP
    let  url = `http://${urlVercel}/pedido/`
    let textoMensaje: any = []
    data.map( (e) => textoMensaje.push(`${e.id},${e.cartAmount};`)) 
    textoMensaje = textoMensaje.join('')
    setTimeout(()=> {
        window.open(`https://api.whatsapp.com/send?phone=593983483121&text=Hola%20este%20es%20mi%20pedido:%20${url}${textoMensaje}`)
        
      },1000)
  }

  return (
    <div
      className={`drawer-overlay flex justify-end w-screen min-h-screen fixed top-0 left-0 z-10 ${
        active ? `block` : "hidden"
      }`}
    >
      <div className="w-full bg-stone-600 opacity-95"></div>
      <div className="flex flex-col justify-center items-center w-[24rem] max-[500px]:w-[22rem] h-screen bg-white">
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

        <ul
          className={`h-full p-1 ${style.contenedorScroll} my-1 w-[22.5rem] max-[500px]:w-[21.2rem] flex flex-col items-center`}
        >
          {data.map((cart: ModelCart) => (
            <CardSidebar
              key={cart.id}
              data={cart}
              deleteProduct={deleteProduct}
              setData={setData}
            />
          ))}
        </ul>

        <div className="my-1 relative w-full h-[4rem] flex justify-end">
          <button
            onClick={clearCar}
            className="btn rounded-full h-[4rem] absolute right-4 hover:shadow-lg"
          >
            <Image src={carClose} alt="car clear" width={30} />
          </button>
        </div>
        <div className="flex flex-col justify-center gap-1 px-4 py-4 text-sm w-full max-[500px]:w-full h-[9rem] bg-pink-200">
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold">Total productos:</p>
            <p className="text-lg text-gray-600 font-semibold">
              {
                data.reduce((acumulate,current,) => {
                   return acumulate + current.cartAmount
                  }
              ,0)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold">Total a pagar:</p>
            <p className="text-xl font-bold text-pink-400">
              ${
                data.reduce((acumulate,current) => { 
                  if(typeof current.price === 'number'){
                    return acumulate + (current.price * current.cartAmount)
                  } else{
                    return acumulate + ( parseFloat(current.price) * current.cartAmount)
                  }
                },0).toFixed(2)
              }
            </p>
          </div>
          <button onClick={botonMensaje} className="btn">Hacer Pedido</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
