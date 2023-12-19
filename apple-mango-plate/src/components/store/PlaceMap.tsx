import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;

interface Props {
  x: number;
  y: number;
}

export default function PlaceMap({ x, y }: Props) {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: y, lng: x }}
        className="mt-16 flex w-[450px] h-[250px] md:w-[650px] md:h-[300px] border-2 border-black"
      >
        <MapMarker position={{ lat: y, lng: x }} />
      </Map>
    </>
  );
}
