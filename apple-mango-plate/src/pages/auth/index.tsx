import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(
    async (body: { email: string; password: string }) => {
      try {
        const { email, password } = body;
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (result?.error) {
          return result.error;
        }
        router.push("/");
      } catch (error) {
        console.error("error >>", error);
      }
    },
    [router]
  );

  return (
    <div className="bg-primary-black h-screen flex justify-center items-center">
      <div className="bg-[white] w-96 h-[500px] rounded-3xl flex flex-col justify-center items-center p-5">
        <form className="bg-primary-black py-2 flex flex-col gap-3 w-2/3 rounded-3xl mb-5">
          <div className="flex items-center gap-3">
            <label className="block w-4 text-sm ml-2" htmlFor="email">
              ID
            </label>
            <input
              className="text-[black] py-[2px] w-full mr-1 rounded-3xl bg-primary-yellow"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>

        <form className="bg-primary-black py-2 flex flex-col gap-3 w-2/3 rounded-3xl">
          <div className="flex gap-3 items-center">
            <label className="block w-4 text-sm ml-2" htmlFor="password">
              PW
            </label>
            <input
              className="text-[black] py-[2px] w-full mr-1 rounded-3xl bg-primary-yellow"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button
          className="bg-primary-black py-2 flex justify-center w-2/3 rounded-3xl my-5"
          onClick={() => onSubmit({ email, password })}
        >
          로그인
        </button>
        <div className="w-2/3 border-[1px] border-[#787822]"></div>

        <div className="flex flex-col mt-4 gap-y-3 w-1/2">
          <button
            className="bg-[#f7f72f] text-[black] w-full h-10 rounded-3xl"
            onClick={() => signIn("kakao")}
          >
            kakaoTalk
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
