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
        <div className="w-full h-16 bg-mypage-header z-50">
          <div className="flex h-16 items-center justify-between text-3xl text-white ml-20">
            <p>My Page</p>
          </div>
        </div>
        <div className="w-full h-16 border-b-[3px] border-mypage-header">
          <div className="flex flex-row h-16 items-center text-xl text-primary-orange ml-20">
            <button className="bg-white border-[2px] border-primary-orange rounded-3xl w-24 py-1 mr-5">
              내정보
            </button>
            <button className="bg-white border-[2px] border-primary-orange rounded-3xl w-24 py-1 mr-5">
              찜
            </button>
            <button className="bg-white border-[2px] border-primary-orange rounded-3xl w-24 py-1">
              리뷰모음
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div>
            <p>ID: {myPageData.id}</p>
            <p>Email: {myPageData.email}</p>
            <p>Nickname: {myPageData.nickName}</p>
            <p>Role: {myPageData.role}</p>
            <p>Phone Number: {myPageData.phoneNumber}</p>
            <p>Profile Image: {myPageData.profileImage}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
