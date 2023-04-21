"use client";

import { useEffect, useState } from "react";
import { mockProducts } from "../../../mock/mockproduct";
import CardDescription from "./components/CardDescription";
import CardDetailProduct from "./components/CardDetailProduct";
import CardImage from "./components/CardImage";
import { ModelProduct } from "@/models/ModelProduct";

const ProductDetail = ({ params }: any) => {
  const [data, setData] = useState<ModelProduct>();

  useEffect(() => {
    const product = mockProducts.find(
      (product) => product.id === Number(params.id)
    );

    setData(product);
  }, []);

  return (
    <>
      {data && (
        <div className="mb-8 mt-16">
          <div className="flex justify-center items-start gap-4 mb-8 max-[700px]:flex-col">
            <div className="mx-auto">
              <CardImage image={data.image} />
            </div>
            <CardDetailProduct data={data} />
          </div>
          <CardDescription description={data.description} />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
