import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myPageState } from "@/atoms/myPageIdx";
import Layout from "@/components/Layout/layout";
import { axiosAWSInstance } from "@/apis/axiosInstance";

const MyPage = () => {
  const myPageData = useRecoilValue(myPageState);
  const setMyPageData = useSetRecoilState(myPageState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emailData = localStorage.getItem("email");
        const accessToken = localStorage.getItem("accessToken");

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_AWS_SERVER}/user/mypage/${emailData}`,
          {
            headers: {
              access_token: `${accessToken}`,
            },
          }
        );

        const { id, email, nickName, role, phoneNumber, profileImage } =
          response.data.result;

        setMyPageData({
          ...myPageData,
          id,
          email,
          nickName,
          role,
          phoneNumber,
          profileImage,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [myPageData, setMyPageData]);

  return (
    <Layout>
      <div>
        <p>ID: {myPageData.id}</p>
        <p>Email: {myPageData.email}</p>
        <p>Nickname: {myPageData.nickName}</p>
        <p>Role: {myPageData.role}</p>
        <p>Phone Number: {myPageData.phoneNumber}</p>
        <p>Profile Image: {myPageData.profileImage}</p>
      </div>
    </Layout>
  );
};

export default MyPage;
