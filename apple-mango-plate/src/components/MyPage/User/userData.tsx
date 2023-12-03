import { useState } from "react";
import { useRecoilState } from "recoil";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { myPageState } from "@/atoms/myPageIdx";
import { getMyPage } from "@/apis/mypage/mypage";
import { editMyPage } from "@/apis/mypage/editData";

const UserDataPage = () => {
  const [myPageStateData, setMyPageData] = useRecoilState(myPageState);
  const [newNickName, setNewNickName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const queryClient = useQueryClient();

  const { data: myPageQueryData, refetch } = useQuery("myPageData", getMyPage, {
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: (data) => {
      if (data !== null) {
        setMyPageData({
          ...myPageStateData,
          ...data,
        });
        setNewNickName(data.nickName);
        setNewPhone(data.phoneNumber);
      }
    },
  });

  const mutation = useMutation(
    (newData: { nickName: string; phoneNumber: string }) =>
      editMyPage(newData.nickName, newData.phoneNumber),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("myPageData");
      },
    }
  );

  const handleDataChange = () => {
    mutation.mutate(
      { nickName: newNickName, phoneNumber: newPhone },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  if (!myPageQueryData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-3xl text-left">내 정보 수정</h2>
      <p className="text-lg ml-20">
        애플 망고 플레이트의 프로필을 수정 하실 수 있습니다.
      </p>
      <div className="w-full h-full my-10 space-y-2">
        <div className="bg-primary-yellow">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              프로필 이미지 변경
            </label>
          </div>
        </div>
        <div className="bg-primary-yellow">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              닉네임 변경
            </label>
            <input
              type="text"
              value={newNickName}
              onChange={(e) => setNewNickName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              placeholder={myPageQueryData.nickName}
            />
          </div>
        </div>
        <div className="bg-primary-yellow">
          <div className="mb-6 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              내 번호 변경
            </label>
            <input
              type="text"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              placeholder={myPageQueryData.phoneNumber}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDataChange}
        >
          변경하기
        </button>
      </div>
    </div>
  );
};

export default UserDataPage;
