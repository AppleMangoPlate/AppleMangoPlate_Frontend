import { useQuery } from "react-query";
import { axiosSearchInstance } from "../axiosInstance";
import { Store } from "@/types/store.dto";
import { GetServerSideProps } from "next";

const fillterFn = (data: any) => {
  const result: Store[] = data.map((item: any) => {
    const store: Store = {
      category_name: item.category_name.split(">")[1],
      id: Number(item.id),
      phone: item.phone,
      place_name: item.place_name,
      place_url: item.place_url,
      road_address_name: item.road_address_name,
      x: item.x,
      y: item.y,
    };
    return store;
  });
  return result;
};

const getKeywordSearch = async (
  keyword: string,
  classify: string,
  page: number
) => {
  const res = await axiosSearchInstance.get(
    `/keyword.json?page=${page}&size=10&sort=accuracy&query=${keyword} ${classify}&category_group_code=FD6`
  );
  return fillterFn(res.data.documents);
};

export const useGetKeywordSearch = (
  keyword: string,
  classify: string,
  page: number
) => {
  return useQuery(
    ["getKeywordSearch", keyword, classify, page],
    () => getKeywordSearch(keyword, classify, page),
    {
      enabled: !!keyword && !!classify && !!page,
    }
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const { keyword, classify, page } = query;
  return {
    props: {
      keyword,
      classify,
      page,
    },
  };
};
