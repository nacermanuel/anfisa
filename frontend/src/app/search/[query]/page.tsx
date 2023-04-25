import GridCardProduct from "@/app/components/GridCardProduct";
import Link from "next/link";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      <div className="text-[1rem] breadcrumbs">
        <ul>
          <li className="text-pink-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li>{params.query}</li>
        </ul>
      </div>
      <div>
        <GridCardProduct search={params.query} />
      </div>
    </div>
  );
};

export default page;
