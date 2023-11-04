import { Store } from "@/types/store.dto";
import Image from "next/image";
import React from "react";

export default function SearchThumbnail(props: Store) {
  const { category_name, place_name, road_address_name } = props;

  return (
    <div className="search-container">
      <div className="search-image-wrapper">
        <Image
          src="/main_restaurant.png"
          fill={true}
          alt="store-main-image"
          objectFit="cover"
        />
      </div>
      <span className="search-title">{place_name}</span>
      <span className="search-text">
        {road_address_name.split(" ")[1]} - {category_name}
      </span>
    </div>
  );
}
