import "@/styles/globals.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "@/components";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Hygraph CMS</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
