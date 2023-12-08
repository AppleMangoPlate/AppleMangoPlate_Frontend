import axios, { AxiosInstance } from "axios";
import { getCookie, setCookie } from "cookies-next";
import { axiosAWSInstance } from "./axiosInstance";

const useAxiosWithAuth = (): AxiosInstance => {
  axiosAWSInstance.interceptors.request.use(
    (config) => {
      const token = getCookie("accessToken");
      if (token) {
        config.headers["access_token"] = `${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosAWSInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const statusCode = error.response?.status;
      if (
        (statusCode === 419 || statusCode === 401) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const refreshToken = getCookie("refreshToken");
        if (refreshToken) {
          const res = await axios.get(`/jwt-login/issue/token`, {
            headers: {
              "Content-Type": `application/json`,
              Refresh_Token: refreshToken,
            },
          });
          const newAccessToken = res.headers["Access_Token"];
          if (newAccessToken) {
            setCookie("accessToken", newAccessToken);
            axiosAWSInstance.defaults.headers.common["Authorization"] =
              "Bearer " + newAccessToken;
            return axiosAWSInstance(originalRequest); // 요청 재시도
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosAWSInstance;
};

export default useAxiosWithAuth;
