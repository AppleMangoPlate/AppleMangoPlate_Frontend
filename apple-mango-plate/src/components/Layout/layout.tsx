import React from "react";
import Header from "./header";
import { useState, useEffect, useRef } from "react";
import { useSetNavBarTheme } from "@/utils/scrollTrigger";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  // const {setNavBarTheme} = useSetNavBarTheme();
  return (
    <>
      <Header />
      <main className="sm:w-screen md:w-screen lg:w-screen h-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;
