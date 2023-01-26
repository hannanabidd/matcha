import React, { FC } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

interface Props {
  children: React.ReactNode;
}

const QuizLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default QuizLayout;
