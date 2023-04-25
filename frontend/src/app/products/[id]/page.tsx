"use client";

import { useEffect, useState } from "react";
import CardDescription from "./components/CardDescription";
import CardDetailProduct from "./components/CardDetailProduct";
import CardImage from "./components/CardImage";
import { fetchProducts } from "./services/fetchProducts";
import Link from "next/link";

const ProductDetail = ({ params }: any) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchResp = async () => {
      const resp: any = await fetchProducts(params.id);
      setData(resp);
    };
    fetchResp();
    console.log(data);
  }, [params.id]);

  return (
    <div>
      <div className="text-[1rem] breadcrumbs">
        <ul>
          <li className="text-pink-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li>{data?.name}</li>
        </ul>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default ProductDetail;
