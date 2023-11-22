import { useEffect } from "react";

interface Props {
  x: number;
  y: number;
}

export default function PlaceMap({ x, y }: Props) {
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(y, x),
          level: 3,
          marker: true,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // Create a marker
        const markerPosition = new window.kakao.maps.LatLng(y, x);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // Add the marker
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    // Clean up on unmount
    return () => {
      mapScript.removeEventListener("load", onLoadKakaoMap);
    };
  }, [x, y]); // Add x and y to the dependency array

  return (
    <div
      id="map"
      className="mt-16 flex w-[450px] h-[250px] md:w-[650px] md:h-[300px] border-2 border-black"
    />
  );
}
