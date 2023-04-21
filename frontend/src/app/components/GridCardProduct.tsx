import React from "react";
import { mockProducts } from "@/mock/mockproduct";
import CardProduct from "@/components/CardProduct";

const GridCardProduct = () => {
  return (
    <div className="my-3 w-full grid grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] max-[600px]:grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] justify-center gap-3">
      {mockProducts.map((product) => (
        <CardProduct key={product.id} data={product} />
      ))}
    </div>
  );
};

export default GridCardProduct;
