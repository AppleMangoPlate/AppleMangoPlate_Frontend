// export interface DefaultSession {
//   user?: {
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//   };
//   expires: ISODateString;
// }
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      // idx: number;
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
