import { scrollPosition } from "@/atoms/header";
import { HeaderDTO } from "@/types/header";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export const useNavBarTheme = () => {
  return useRecoilState(scrollPosition);
};

export const useSetNavBarTheme = (theme: HeaderDTO) => {
  const setNavBarTheme = useSetRecoilState(scrollPosition);

  useEffect(() => {
    setNavBarTheme(theme);
  }, []);
};
