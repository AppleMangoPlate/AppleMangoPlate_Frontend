import { useState, useEffect } from "react";
import { userModalToggle, userState } from "@/atoms/users";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { axiosAWSInstance } from "@/apis/axiosInstance";

const UserModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState<boolean>(userModalToggle);
  const setUser = useSetRecoilState(userState);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const onClose = (des: string) => {
    setModalOpen(false);
    router.push(des);
  };
  const handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    const email = localStorage.getItem("email");

    axiosAWSInstance
      .delete(`/jwt-login/logout`, {
        data: { email },
      })
      .then((response) => {
        // 로그아웃 성공 시 처리
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("email");
        setUser(null);
        setModalOpen(false);
        router.push("/");
        setIsUserLoggedIn(false);
      })
      .catch((error) => {
        // 로그아웃 실패 시 처리
        console.error("Logout failed", error);
      });
  };

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage.getItem("accessToken"));
  }, []);

  return (
    <>
      {modalOpen && (
        <div className="absolute top-11 right-5">
          <div className="bg-primary-black w-64 h-auto text-white border-white p-4 rounded-s-3xl rounded-b-3xl">
            <div className="text-center border-b-4 leading-10 mb-4">
              <p>내 정보</p>
            </div>
            <div className="mb-4">
              <p>{isUserLoggedIn ? "환영합니다" : "로그인이 필요합니다"}</p>
            </div>
            <div className="flex justify-center">
              {isUserLoggedIn ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <button onClick={() => onClose("/auth")}>로그인</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
