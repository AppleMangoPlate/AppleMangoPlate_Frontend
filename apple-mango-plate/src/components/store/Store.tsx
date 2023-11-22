import React from "react";
import PlaceInfo from "./PlaceInfo";
import PlaceMap from "./PlaceMap";
import PlaceReview from "./PlaceReview";
import { Store } from "@/types/store.dto";

interface Props {
  storeInfo: Store;
}

export default function Store({ storeInfo }: Props) {
  return (
    <div className="w-full flex justify-center py-10">
      <section className="flex w-[500px] md:w-[700px] justify-center flex-col">
        <PlaceInfo storeInfo={storeInfo} />
        <div className="flex relative mt-10 w-full h-fit justify-center items-center flex-col bg-[url('/store_background.png')] bg-cover bg-center">
          <PlaceMap x={storeInfo.x} y={storeInfo.y} />
          <PlaceReview />
        </div>
      </section>
    </div>
  );
}
