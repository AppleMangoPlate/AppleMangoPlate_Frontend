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
    <div className="w-full flex bg-slate-400 justify-center py-10">
      <section className="flex w-[500px] md:w-[700px] justify-center flex-col bg-red-300">
        <PlaceInfo storeInfo={storeInfo} />
        <PlaceMap />
        <PlaceReview />
      </section>
    </div>
  );
}
