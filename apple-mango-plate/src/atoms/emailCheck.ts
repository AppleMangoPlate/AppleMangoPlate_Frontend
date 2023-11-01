import { EmailCheckDTO } from "@/types/email";
import { atom } from "recoil";

export const isEmailAvailableState = atom<EmailCheckDTO["isEmailAvailable"]>({
  key: "isEmailAvailableState",
  default: null,
});

export const emailCheckMessageState = atom<EmailCheckDTO["emailCheckMessage"]>({
  key: "emailCheckMessageState",
  default: "",
});
