import { modelbrand } from "@/models/modelbrand";
import React from "react";

interface Props {
  data: modelbrand;
}

export const CardBrand = ({ data }: Props) => {
  return (
    <div className="card w-[10rem] bg-base-100 hover:shadow-xl">
      <a href={`/brand/${data.name}`}>
        <figure>
          <img
            src={data.image}
            alt={data.name}
            className="w-[10rem] h-[8rem] rounded-t-xl"
          />
        </figure>
        <div className="card-actions justify-center pb-3 bg-white rounded-b-xl">
          <div className="badge badge-outline w-auto ">{data.name}</div>
        </div>
      </a>
    </div>
  );
};
