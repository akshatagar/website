import "@/styles/globals.css";
import MainLayout from "@/layout/main-layout";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <head>
        <title>OMiNTEL</title>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </body>
    </>
  );
}
