import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myPageState } from "@/atoms/myPageIdx";
import Layout from "@/components/Layout/layout";
import { getMyPage } from "@/apis/mypage/mypage";

const MyPage = () => {
  const myPageData = useRecoilValue(myPageState);
  const setMyPageData = useSetRecoilState(myPageState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyPage();

        if (data !== null) {
          setMyPageData({
            ...myPageData,
            ...data,
          });
        }
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
