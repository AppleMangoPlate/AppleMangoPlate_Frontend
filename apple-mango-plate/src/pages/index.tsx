import Layout from "@/components/Layout/layout";
import Home from "@/components/home/Home";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      console.log("토큰 존재");
    } else {
      console.log("토큰 X");
    }
  });
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
