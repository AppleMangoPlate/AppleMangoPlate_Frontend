import { SignupDTO } from "@/types/signup";
import { atom } from "recoil";

export const signupState = atom<SignupDTO>({
  key: "signupState",
  default: {
    email: "",
    password: "",
    name: "",
    passwordCheck: "",
    phone: "",
  },
});
