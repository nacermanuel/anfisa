import { modelcategory } from "@/models/modelcategory";
import React from "react";

interface Props {
  data: modelcategory;
}

export const CardCategory = ({ data }: Props) => {
  return (
    <div className="carousel-item rounded-box hover:shadow-lg">
      <a href={`/categories/${data.name}`}>
        <img src={data.image} alt={data.name} className="rounded-box w-64" />
      </a>
    </div>
  );
};
