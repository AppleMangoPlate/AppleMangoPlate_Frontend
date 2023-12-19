import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

export default function ReviewImage({ image }: Props) {
  return (
    <div className="p-2 flex items-center">
      <Image src={image} alt={image} width={80} height={80} />
    </div>
  );
}
