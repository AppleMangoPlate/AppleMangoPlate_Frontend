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
    <div>
      <form className="flex flex-col gap-3">
        <div className="flex gap-3">
          <label htmlFor="email">이메일</label>
          <input
            className="bg-[gray-100]"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              const input = e.target.value;
              setEmail(input);
            }}
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="password">비밀번호</label>
          <input
            className="bg-[gray-100]"
            id="password"
            value={password}
            placeholder="*******"
            onChange={(e) => {
              const input = e.target.value;
              setPassword(input);
            }}
          />
        </div>
        <button
          className="border-2 border-black"
          onClick={() => onSubmit({ email, password })}
        >
          로그인
        </button>
      </form>
      <div>
        <Link href="/auth/customlogin">
          <button>회원가입</button>
        </Link>
      </div>
      <div>
        <button onClick={() => signIn("kakao")}>카카오 로그인</button>
      </div>
    </div>
  );
};

export default Auth;
