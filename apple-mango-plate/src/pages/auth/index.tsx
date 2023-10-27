import { signIn, useSession } from "next-auth/react";

const LogIn = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div>
        <button>로그인</button>
      </div>
      <div>
        <button onClick={() => signIn("kakao")}>카카오 로그인</button>
      </div>
    </div>
  );
};

export default LogIn;
