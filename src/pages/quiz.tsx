import QuizLayout from "@/components/base/Layout/QuizLayout/QuizLayout";
import Head from "next/head";
import React from "react";
import QuizOne from "../features/QuizPage/QuizOne";
import QuizProvider from "../context/quiz/QuizContext";

const Quiz = () => {
  return (
    <>
      <Head>
        <title>Quiz - Matcha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuizProvider>
        <QuizLayout>
          <QuizOne />
        </QuizLayout>
      </QuizProvider>
    </>
  );
};

export default Quiz;
