import axios from "axios";
import { useRouter } from "next/router";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const router = useRouter();

    if (error.response.status === 403) {
      const refreshToken = localStorage.getItem("refreshToken");

      const res = await axios.post("/jwt-login/login", { token: refreshToken });

      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);

        error.config.headers["Authorization"] =
          "Bearer " + res.data.accessToken;
        return axios(error.config);
      } else {
        router.push("/auth");
      }
    }

    return Promise.reject(error);
  }
);
