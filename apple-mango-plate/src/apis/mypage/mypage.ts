import axios from "axios";
import { axiosAWSInstance } from "../axiosInstance";

export const MyPageData = async (emailData: string, accessToken: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_AWS_SERVER}/user/mypage/${emailData}`,
      {
        headers: {
          access_token: `${accessToken}`,
        },
      }
    );
    console.log("Response:", response);
    console.log(emailData);
    return response.data;
  } catch (error) {
    return null;
  }
};
