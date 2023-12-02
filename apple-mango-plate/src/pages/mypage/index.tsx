import { useRecoilState } from "recoil";
import Layout from "@/components/Layout/layout";
import { myPageButtonState } from "@/atoms/myPageButton";
import UserDataPage from "@/components/MyPage/User/userData";
import SaveItemPage from "@/components/MyPage/SaveItem/saveItem";
import ReviewPage from "@/components/MyPage/Review/review";

const MyPage = () => {
  const [button, setButton] = useRecoilState(myPageButtonState);
  const buttons = ["내정보", "찜", "리뷰모음"];
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
            {buttons.map((name, index) => (
              <button
                key={index}
                className="bg-white border-[2px] border-primary-orange rounded-3xl w-24 py-1 mr-5"
                onClick={() => setButton(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          {button === "내정보" && <UserDataPage />}
          {button === "찜" && <SaveItemPage />}
          {button === "리뷰모음" && <ReviewPage />}
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
