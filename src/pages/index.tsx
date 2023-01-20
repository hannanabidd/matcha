import Layout from "@/components/base/Layout/Layout";
import Head from "next/head";
import React from "react";
import LandingPage from "./LandingPage/LandingPage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Matcha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
};
export default Home;
