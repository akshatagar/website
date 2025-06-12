import "@/styles/globals.css";
import MainLayout from "@/layout/main-layout";
import { useEffect } from "react";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <head>
        <title>OMiNTEL</title>
        <Link rel="icon" href="/favicon.ico"></Link>
      </head>
      <body>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </body>
    </>
  );
}
