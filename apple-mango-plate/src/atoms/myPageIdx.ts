import { MypageDTO } from "@/types/mypage";
import { atom } from "recoil";

export const myPageState = atom<MypageDTO>({
  key: "myPageState",
  default: {
    id: 0,
    email: "",
    nickName: "",
    role: "",
    phoneNumber: "",
    profileImage: "",
  },
});
