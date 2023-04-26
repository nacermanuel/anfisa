import GridCardProductBrand from "../components/GridCardProductBrand";
import Link from "next/link";
import React from "react";
import SliderBrand from "@/components/SliderBrand";

const page = ({ params }: any) => {
  return (
    <div>
      <SliderBrand/>
      <div className="text-[1rem] breadcrumbs">
        <ul>
          <li className="text-pink-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li>Marca: {params.query.replace(/%20/g,' ')}</li>
        </ul>
      </div>
      <div>
        <GridCardProductBrand brand={params.query} />
      </div>
    </div>
  );
};

export default page;