import Image from "next/image";
import React from "react";
import { Store } from "@/types/store.dto";

export default function SearchThumbnail(props: Store) {
  const { category_name, place_name, road_address_name } = props;

  return (
    <div className="search-thumbnail-container">
      <section className="search-thumbnail-image-wrapper">
        <Image
          src="/main_restaurant.png"
          fill={true}
          alt="store-main-image"
          objectFit="cover"
        />
      </section>
      <section className="search-thumbnail-text-wrapper">
        <span className="search-thumbnail-title">{place_name}</span>
        <span className="search-thumbnail-text">
          {road_address_name.split(" ")[1]} - {category_name}
        </span>
      </section>
    </div>
  );
}
