import { Store } from "@/types/store.dto";
import Image from "next/image";
import React from "react";
import storeImage from "/public/main_restaurant.png";

interface Props {
  storeInfo: Store;
}

export default function PlaceInfo({ storeInfo }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full h-fit aspect-video">
        <Image
          src={storeImage}
          alt="store image"
          fill={true}
          objectFit="cover"
        />
      </section>
      <section>
        <div className="flex w-full relative items-center justify-center">
          <div className="flex absolute top-[-80px] flex-col w-[300px] md:w-[500px] h-40 bg-white border-2 border-black items-center">
            <div className="h-1/2 w-full bg-red-200">
              <h1 className="text-2xl font-bold mt-4">
                {"{ " + storeInfo.place_name + " }"}
              </h1>
              <span> {storeInfo.category_name}</span>
            </div>
            <div className="h-1/2 w-full bg-red-200">
              <span> {storeInfo.road_address_name}</span>
              <span> {storeInfo.phone}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
