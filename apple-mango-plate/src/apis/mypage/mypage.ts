import { axiosAWSInstance } from "../axiosInstance";
import { getCookie } from "cookies-next";

export const getMyPage = async () => {
  const emailData = localStorage.getItem("email");
  const accessToken = getCookie("accessToken");

  try {
    const response = await axiosAWSInstance.get(`/user/mypage/${emailData}`, {
      headers: {
        access_token: `${accessToken}`,
      },
    });

    const { id, email, nickName, role, phoneNumber, profileImage } =
      response.data.result;

    return {
      id,
      email,
      nickName,
      role,
      phoneNumber,
      profileImage,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
