import React from "react";

interface Props {
  image: string;
}

const CardImage = ({ image }: Props) => {
  return (
    <div className="p-2">
      <img className="w-[26rem]" src={image} alt={image} />
    </div>
  );
};

export default CardImage;
