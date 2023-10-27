import React from "react";
import Header from "./header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
