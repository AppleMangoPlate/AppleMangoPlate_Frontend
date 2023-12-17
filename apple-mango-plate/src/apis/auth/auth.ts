import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const data = { email: email, password: password };
    axios.defaults.withCredentials = true;

    const res = await axios.post(`/jwt-login/login`, data, {
      headers: {
        "Content-Type": `application/json`,
      },
    });

    const accessToken = res.headers["access_token"];
    const refreshToken = res.headers["refresh_token"];

    return { accessToken, refreshToken };
  } catch (ex) {
    console.error("login request fail : " + ex);
    return null;
  }
};
