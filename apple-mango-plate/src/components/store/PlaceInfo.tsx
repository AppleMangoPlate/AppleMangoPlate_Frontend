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
        <div className="flex w-full relative items-center justify-center z-10">
          <div className="flex absolute top-[-80px] flex-col w-[300px] md:w-[500px] h-40 bg-white border border-black items-center">
            <div className="flex h-1/2 w-[70%] items-center flex-col border-b-2 border-signature_orange">
              <h1 className="text-2xl font-bold mt-4">
                {"{ " + storeInfo.place_name + " }"}
              </h1>
              <span className="text-xs mt-2"> {storeInfo.category_name}</span>
            </div>
            <div className="flex h-1/2 w-full items-center flex-col py-2">
              <span className="text-sm"> {storeInfo.road_address_name}</span>
              <span className="text-sm mt-1"> {storeInfo.phone}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
