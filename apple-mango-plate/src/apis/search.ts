import { axiosInstance } from "./axiosInstance";

//const enum SearchType {
//  "한식" = "한식",
//  "양식" = "양식",
//}

export const getKeywordSearch = async (keyword: string, classify: string) => {
  try {
    const res = await axiosInstance.get(`/search/${keyword}/${classify}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
