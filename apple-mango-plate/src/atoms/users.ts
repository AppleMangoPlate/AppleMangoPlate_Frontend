import { atom } from "recoil";

export const userModalToggle = atom<boolean>({
  key: "userModalToggle",
  default: false,
});
