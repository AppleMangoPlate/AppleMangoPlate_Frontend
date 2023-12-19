import { axiosAWSInstance } from "../axiosInstance";
import { getCookie } from "cookies-next";

export const editMyPage = async (formData: any) => {
  const emailData = localStorage.getItem("email");
  const accessToken = getCookie("accessToken");

  try {
    const response = await axiosAWSInstance.put(
      `/user/mypage/${emailData}/update`,
      formData,
      {
        headers: {
          access_token: `${accessToken}`,
          "Content-Type": "multipart/form-data",
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
