import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER}`,
});

export const axiosAWSInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_AWS_SERVER}`,
});

export const axiosSearchInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SEARCH_API}`,
  headers: {
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_SEARCH_API_KEY}`,
  },
});
