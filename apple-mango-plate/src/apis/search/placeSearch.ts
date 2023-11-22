import { useQuery } from "react-query";
import { axiosSearchInstance } from "../axiosInstance";
import { Store } from "@/types/store.dto";

const storeFillterFn = (data: any) => {
  const store: Store = {
    category_name: data.category_name,
    id: Number(data.id),
    phone: data.phone,
    place_name: data.place_name,
    place_url: data.place_url,
    road_address_name: data.road_address_name,
    x: data.x,
    y: data.y,
  };
  return store;
};

export const getPlaceSearch = async (place: string) => {
  const res = await axiosSearchInstance.get(
    `/keyword.json?page=1&size=1&sort=accuracy&query=${place}&category_group_code=FD6`
  );
  return storeFillterFn(res.data.documents[0]);
};

export const useGetPlaceSearch = (place: string) => {
  return useQuery(["getPlaceSearch", place], () => getPlaceSearch(place), {
    enabled: !!place,
  });
};
