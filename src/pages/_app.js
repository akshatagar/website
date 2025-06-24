import "../styles/globals.css";
import MainLayout from "../layout/main-layout";
import { useEffect } from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>OMiNTEL</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/white-logo.png" />
        <link rel="preload" as="image" href="/Logo_with_white.png" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
