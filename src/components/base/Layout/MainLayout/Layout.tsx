import React, { FC } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
