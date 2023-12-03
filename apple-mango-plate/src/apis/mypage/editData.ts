import { axiosAWSInstance } from "../axiosInstance";
import { getCookie } from "cookies-next";

export const editMyPage = async (newNickName: string) => {
  const emailData = localStorage.getItem("email");
  const accessToken = getCookie("accessToken");

  try {
    const response = await axiosAWSInstance.put(
      `/user/mypage/${emailData}/update`,
      { nickName: newNickName },
      {
        headers: {
          access_token: `${accessToken}`,
        },
      }
    );

    const { id, email, nickName, role, phoneNumber, profileImage } =
      response.data.result;
    console.log(response.data);
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
