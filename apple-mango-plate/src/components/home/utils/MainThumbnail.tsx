import React from "react";
import restaurant from "../../../../public/main_restaurant.png";
import Image from "next/image";

interface props {
  title: string;
  color: string;
}

export default function MainThumbnail({ title, color }: props) {
  return (
    <div className="flex items-end justify-center h-full">
      <div
        className={`absolute flex justify-center items-center rounded-full text-center
          w-[18vw] h-[18vw] mb-[4.5vw] max-w-[300px] max-h-[300px] ${
            color === "black" ? "bg-background_gray" : "bg-background"
          }`}
      >
        <span
          className={`${color === "black" ? "text-white" : "text-black"}
          flex w-[10vw] mb-[7vw] text-bold text-[1.5vw] whitespace-pre-wrap justify-center`}
        >
          {title}
        </span>
      </div>
      <Image
        src={restaurant}
        alt="main-logo-1"
        quality={100}
        className="w-[18vw] h-[14vw] max-w-[300px] flex z-10"
      />
    </div>
  );
}
