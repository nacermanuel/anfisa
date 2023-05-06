import GridCardProductCategory from "../components/GridCardProductCategory";
import Link from "next/link";
import React from "react";
import SliderCategory from "@/components/SliderCategory";
import SliderDataServerCategory from "@/components/SliderDataServerCategory";

const page = ({ params }: any) => {
  return (
    <div>
      <SliderDataServerCategory />
      <div className="text-[1rem] breadcrumbs">
        <ul>
          <li className="text-pink-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li>Categoría: {params.query.replace(/%20/g, " ")}</li>
        </ul>
      </div>
      <div>
        <GridCardProductCategory category={params.query} />
      </div>
    </div>
  );
};

export default page;
