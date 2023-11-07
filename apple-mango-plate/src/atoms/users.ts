import { UserDTO } from "@/types/user";
import { atom } from "recoil";

export const userModalToggle = atom<boolean>({
  key: "userModalToggle",
  default: false,
});

export const userState = atom<UserDTO | null>({
  key: "userState",
  default: null,
});
