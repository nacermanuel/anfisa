import React from "react";

interface Props {
  description: string;
}

const CardDescription = ({ description }: Props) => {
  return (
    <div className="mb-10 border p-4">
      <p className="card-title mb-4">Descripción del producto</p>
      <p>{description}</p>
    </div>
  );
};

export default CardDescription;
