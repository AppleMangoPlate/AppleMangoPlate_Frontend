import { userModalToggle } from "@/atoms/users";
import { useRecoilState } from "recoil";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const UserModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState<boolean>(userModalToggle);
  const { data: session } = useSession();
  const router = useRouter();
  const onClose = (des: string) => {
    setModalOpen(false);
    router.push(des);
  };

  if (session) {
    return (
      <>
        {modalOpen && (
          <div className="absolute top-11 right-5">
            <div className="bg-primary-black w-64 h-auto text-[white] border-[white] p-4 rounded-s-3xl rounded-b-3xl">
              <div className="text-center border-b-4 leading-10 mb-4">
                <p>내 정보</p>
              </div>
              <div className="my-3">{session.user?.name}님 반갑습니다.</div>
              <button
                onClick={() => signOut()}
                className="w-full h-auto border-2 rounded-xl text-center"
              >
                로그아웃
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {modalOpen && (
        <div className="absolute top-11 right-5">
          <div className="bg-primary-black w-64 h-auto text-[white] border-[white] p-4 rounded-s-3xl rounded-b-3xl">
            <div className="text-center border-b-4 leading-10 mb-4">
              <p>내 정보</p>
            </div>
            <div className="mb-4">
              <p>추후 USER 정보</p>
            </div>
            <div className="flex justify-center">
              <Link
                className="w-full h-auto border-2 rounded-xl text-center"
                href="/auth"
              >
                <button onClick={() => onClose("/auth")}>로그인</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
