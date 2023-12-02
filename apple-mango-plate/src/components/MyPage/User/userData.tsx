import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { myPageState } from "@/atoms/myPageIdx";
import { getMyPage } from "@/apis/mypage/mypage";

const UserDataPage = () => {
  const [myPageData, setMyPageData] = useRecoilState(myPageState);

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
    <div>
      <div>
        <h2>내 정보 수정</h2>
        <div>
          <p>애플 망고 플레이트의 프로필을 수정 하실 수 있습니다.</p>
        </div>
      </div>
      <div>
        <p>ID: {myPageData.id}</p>
        <p>Email: {myPageData.email}</p>
        <p>Nickname: {myPageData.nickName}</p>
        <p>Role: {myPageData.role}</p>
        <p>Phone Number: {myPageData.phoneNumber}</p>
        <p>Profile Image: {myPageData.profileImage}</p>
      </div>
    </div>
  );
};

export default UserDataPage;
