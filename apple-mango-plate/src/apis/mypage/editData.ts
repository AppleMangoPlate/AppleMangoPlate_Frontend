import { axiosAWSInstance } from "../axiosInstance";
import { getCookie } from "cookies-next";

export const editMyPage = async (newNickName: string, newPhone: string) => {
  const emailData = localStorage.getItem("email");
  const accessToken = getCookie("accessToken");

  const formData = new FormData();
  formData.append("nickName", newNickName);
  formData.append("phoneNumber", newPhone);

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
