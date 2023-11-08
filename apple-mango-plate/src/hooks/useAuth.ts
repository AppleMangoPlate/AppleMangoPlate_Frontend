//import { verityJwtToken } from "@/utils/auth";
import { JwtPayload } from "jsonwebtoken";
import React from "react";
import Cookies from "universal-cookie";

export function useAuth() {
  const [auth, setAuth] = React.useState<JwtPayload | null>(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    //const verifiedToken = await verityJwtToken(token);
    //setAuth(verifiedToken);
  };
  React.useEffect(() => {
    getVerifiedtoken();
  }, []);
  return auth;
}
