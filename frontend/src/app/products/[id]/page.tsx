"use client";

import { useEffect, useState } from "react";
import CardDescription from "./components/CardDescription";
import CardDetailProduct from "./components/CardDetailProduct";
import CardImage from "./components/CardImage";
import { fetchProducts } from "./services/fetchProducts";


const ProductDetail = ({ params }: any) => {
  const [data, setData] = useState<any>();
  //const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchResp = async () => {
      const resp: any = await fetchProducts(params.id)
      setData(resp);
      //setLoad(false)
    }
    fetchResp();
    console.log(data)
  }, [params.id]);


  return (
    <div>
      {/* <div>{
        load == true && ( <div>loading...</div> ) 
      }</div> */}
      <div>{data && (
        <div className="mb-8 mt-16">
          <div className="flex justify-center items-start gap-4 mb-8 max-[700px]:flex-col">
            <div className="mx-auto">
              <CardImage image={data.image} />
            </div>
            <CardDetailProduct data={data} />
          </div>
          <CardDescription description={data.description} />
        </div>
      )}</div>
    </div>
  );
};

export default ProductDetail;
