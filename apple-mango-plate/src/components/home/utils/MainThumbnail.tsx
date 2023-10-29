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
        w-[30vw] h-[30vw] mb-[10vw] 
        md:w-[15vw] md:h-[15vw] md:mb-[4vw] max-w-[300px] max-h-[300px] ${
          color === "black" ? "bg-background_gray" : "bg-background"
        }`}
      >
        <span
          className={`${color === "black" ? "text-white" : "text-black"}
          flex w-[18vw] md:w-[10vw] mb-[12vw] md:mb-[7vw] text-bold text-[2.5vw] md:text-[1.5vw] whitespace-pre-wrap justify-center`}
        >
          {title}
        </span>
      </div>
      <Image
        src={restaurant}
        alt="main-logo-1"
        quality={100}
        className="w-[30vw] h-[25vw] md:w-[15vw] md:h-[12vw] max-w-[300px] flex z-10"
      />
    </div>
  );
}
