import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "이메일",
          type: "email",
          placeholder: "이메일을 입력하세요",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비밀번호를 입력하세요",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("잘못된 입력값으로 인한 오류가 발생했습니다.");
        }
        const { email, password } = credentials;
        const exUser = {
          id: "1",
          name: "김철수",
          email: "test@naver.com",

          image: "",
        };
        return exUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      console.log("Provider에게 넘겨받은 정보", session);

      const exUser = {
        idx: 2,
        id: "2",
        name: "이철수",
        email: "lee@naver.com",
        image: "",
      };
      session.user = exUser;

      return session;
    },
  },
});
