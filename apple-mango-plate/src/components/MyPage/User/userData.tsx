import { useState } from "react";
import { useRecoilState } from "recoil";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { myPageState } from "@/atoms/myPageIdx";
import { getMyPage } from "@/apis/mypage/mypage";
import { editMyPage } from "@/apis/mypage/editData";
import Image from "next/image";

const UserDataPage = () => {
  const [myPageStateData, setMyPageData] = useRecoilState(myPageState);
  const [newNickName, setNewNickName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

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

  const mutation = useMutation(editMyPage, {
    onSuccess: () => {
      queryClient.invalidateQueries("myPageData");
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        alert("프로필 이미지는 png 또는 jpg 형식이어야 합니다.");
        return;
      }
      setProfileImage(file);
    }
  };

  const handleDataChange = () => {
    if (newNickName.trim() === "" || newPhone.trim() === "") {
      alert("닉네임과 전화번호는 공백일 수 없습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("nickName", newNickName);
    formData.append("phoneNumber", newPhone);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    mutation.mutate(formData, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  if (!myPageQueryData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-2/3 flex flex-col ">
      <h2 className="text-3xl text-left mb-10 text-[#66481A]">내 정보 수정</h2>
      <div className="my-5">
        <p className="text-lg text-[#A57936] ml-20">
          애플 망고 플레이트의 프로필을 수정 하실 수 있습니다.
        </p>
      </div>
      <div className="my-10 space-y-2">
        <div className="bg-primary-yellow mb-4 w-full flex flex-row py-4">
          <div className="flex w-1/3 items-center text-black font-bold mx-10">
            <label>프로필 사진 변경</label>
          </div>
          <div className="flex w-1/3 items-center justify-start ">
            {myPageQueryData.profileImage ? (
              <img
                className="w-32 h-32 rounded-full"
                src={myPageQueryData.profileImage}
                alt={myPageQueryData.profileImage}
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300" />
            )}
          </div>
          <div className=" w-1/3 flex items-center justify-center">
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="file-input"
              className="text-white cursor-pointer bg-black p-2 px-4 rounded-3xl"
            >
              사진 변경
            </label>
          </div>
        </div>

        <div className="bg-primary-yellow mb-4 w-full flex flex-col items-center py-4">
          <div className="flex mb-4 w-full">
            <div className="flex w-1/5 justify-center items-center text-black font-bold">
              <label>닉네임 변경</label>
            </div>
            <div className="w-4/5 mx-2">
              <input
                type="text"
                value={newNickName}
                onChange={(e) => setNewNickName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder={myPageQueryData.nickName}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:shadow-outline"
            onClick={handleDataChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>

        <div className="bg-primary-yellow mb-4 w-full flex flex-col items-center py-4">
          <div className="flex mb-4 w-full">
            <div className="flex w-1/5 justify-center items-center text-black font-bold">
              <label>내 번호 변경</label>
            </div>
            <div className="w-4/5 mx-2">
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder={myPageQueryData.phoneNumber}
              />
            </div>
          </div>
          <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:shadow-outline"
            onClick={handleDataChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDataPage;
