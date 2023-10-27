import { HeaderDTO } from "@/types/header";
import { atom } from "recoil";

export const scrollPosition = atom<HeaderDTO>({
  key: "scrollPosition",
  default: { initial: "white" },
});
