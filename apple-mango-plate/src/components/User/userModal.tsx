import { useState, useEffect } from "react";
import { userModalToggle, userState } from "@/atoms/users";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { axiosAWSInstance } from "@/apis/axiosInstance";
import { useQueryClient } from "react-query";
import Link from "next/link";
import { getCookie, deleteCookie } from "cookies-next";

const UserModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState<boolean>(userModalToggle);
  const setUser = useSetRecoilState(userState);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const onClose = (des: string) => {
    setModalOpen(false);
    router.push(des);
  };

  const queryClient = useQueryClient();

  const handleLogout = () => {
    const email = localStorage.getItem("email");

    axiosAWSInstance
      .delete(`/jwt-login/logout/${email}`)
      .then((response) => {
        deleteCookie("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("email");
        setUser(null);
        setModalOpen(false);
        router.push("/");
        setIsUserLoggedIn(false);
        queryClient.removeQueries("myPageData");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  useEffect(() => {
    setIsUserLoggedIn(!!getCookie("accessToken"));
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
              <p>
                {isUserLoggedIn ? (
                  <div className="flex w-full justify-center border-2 border-white rounded-2xl">
                    <Link href="/mypage">마이페이지</Link>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="flex  justify-center">
              {isUserLoggedIn ? (
                <button
                  className="border-2 border-white rounded-2xl w-full"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              ) : (
                <button
                  className="border-2 border-white rounded-2xl w-full"
                  onClick={() => onClose("/auth")}
                >
                  로그인
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
