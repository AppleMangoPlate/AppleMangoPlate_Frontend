import Image from "next/image";
import React from "react";
import { Store } from "@/types/store.dto";
import { useRouter } from "next/router";

export default function SearchThumbnail(props: Store) {
  const router = useRouter();
  const { category_name, place_name, road_address_name } = props;

  const handleNavigateStore = () => {
    router.push(`/store/${place_name}`);
  };

  return (
    <div className="search-thumbnail-container" onClick={handleNavigateStore}>
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
