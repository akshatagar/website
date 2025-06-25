import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/partnerspage.css";
import MainLayout from "../layout/main-layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>OMiNTEL</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/Logo_with_white.png" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
