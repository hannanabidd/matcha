import QuizLayout from "@/components/base/Layout/QuizLayout";
import Head from "next/head";
import React from "react";
import QuizOne from "./hlo/hloone";

const Quiz = () => {
  return (
    <>
      <Head>
        <title>Quiz - Matcha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuizLayout>
        <QuizOne />
      </QuizLayout>
    </>
  );
};

export default Quiz;
