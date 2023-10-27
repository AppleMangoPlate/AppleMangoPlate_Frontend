import { userModalToggle } from "@/atoms/users";
import { useRecoilState, useRecoilValue } from "recoil";

const UserModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState<boolean>(userModalToggle);

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
              <button className="w-full h-auto border-2 rounded-xl text-center">
                로그인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
