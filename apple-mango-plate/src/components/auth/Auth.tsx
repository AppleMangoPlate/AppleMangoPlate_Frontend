"use client";
import Link from "next/link";
import icons from "@/assets/icons/icon";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "@/atoms/auth";
import Image from "next/image";
import LogoImg from "@/assets/images/Logo.png";
import { setCookie } from "cookies-next";
import { loginUser } from "@/apis/auth/auth";

const Auth = () => {
  const KakaoIcon = icons.kakaoIcons;
  const router = useRouter();
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  async function joinHandler() {
    try {
      const result = await loginUser(email, password);

      if (result) {
        const { accessToken, refreshToken } = result;

        setCookie("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("email", email);

        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      joinHandler();
    }
  };

  return (
    <div className="bg-primary-black min-h-screen flex justify-center items-center">
      <div className="bg-[white] w-96 h-[500px] rounded-3xl flex flex-col justify-center items-center p-5">
        <Image src={LogoImg} alt="Logo" width={120} height={120} />
        <h2 className="text-[black] text-2xl mb-6">Login</h2>
        <form className="flex flex-col gap-3 w-2/3  mb-5">
          <div className="bg-primary-black flex items-center gap-3 rounded-3xl py-2">
            <label className="block w-4 text-sm ml-2" htmlFor="email">
              ID
            </label>
            <input
              className="text-[black] py-[2px] pl-2 w-full mr-1 rounded-3xl bg-primary-yellow"
              id="email"
              required
              value={email}
              placeholder="test@gmail.com"
              autoFocus
              onKeyDown={handleOnKeyPress}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="bg-primary-black flex gap-3 items-center rounded-3xl py-2">
            <label className="block w-4 text-sm ml-2" htmlFor="password">
              PW
            </label>
            <input
              className="text-[black] py-[2px] pl-2 w-full mr-1 rounded-3xl bg-primary-yellow"
              id="password"
              required
              type="password"
              placeholder="test"
              value={password}
              onKeyDown={handleOnKeyPress}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        <button
          className="bg-primary-black py-2 flex justify-center w-2/3 rounded-3xl my-5"
          type="submit"
          onClick={joinHandler}
        >
          로그인
        </button>
        <div className="w-2/3 border-[1px] border-[#787822]"></div>

        <div className="flex flex-col mt-4 gap-y-3 w-1/2">
          <button className="flex items-center justify-center bg-[#f7f72f] text-[black] w-full h-10 rounded-3xl">
            <KakaoIcon size={24} color="black" />
            <span className="ml-2">kakaoTalk</span>
          </button>
          <Link href="/auth/customlogin">
            <button className="bg-primary-black w-full h-10 rounded-3xl">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
