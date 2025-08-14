import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/partnerspage.css";
import MainLayout from "../layout/main-layout";
import Head from "next/head";
import { FeedbackProvider } from "../components/contexts/FeedbackContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <FeedbackProvider>
      <Head>
        <title>OMiNTEL</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/Logo_with_white.png" />
        <link rel="preload" as="image" href="/Proximus_logo1.png" />
        <link rel="preload" as="image" href="/white-logo.png" />
        <link rel="preload" as="video" href="/backvid.mp4" />
        <meta
          name="description"
          content="Discover AI-powered business solutions and explore Omintel's partner network and intelligent automation services."
        />
        <meta
          name="keywords"
          content="AI solutions, Omintel, partner network, intelligent automation, tech consulting, GCC AI Solutions, AI-powered business solutions, digital transformation, AI consulting, AI integration, business automation
          , AI-driven solutions, AI technology, AI services, AI applications, AI innovation, AI for business, AI consulting services, AI implementation, AI strategy, AI development, GCC, UAE, GCC AI, AI in UAE, AI in GCC, AI solutions in UAE, AI solutions in GCC,
          BFSI, AI in BFSI, AI in banking, AI for BFSI, AI solutions for BFSI, AI consulting for BFSI, AI integration for BFSI, AI-driven solutions for BFSI, digital transformation in BFSI, intelligent automation in BFSI,
          AI in startups, AI for startups, AI solutions for startups, AI consulting for startups, AI integration for startups, AI-driven solutions for startups, digital transformation in startups, intelligent automation in startups,
          AI for companies, AI solutions for companies, AI consulting for companies, AI integration for companies, AI-driven solutions for companies, digital transformation in companies, intelligent automation in companies,
          AI in enterprises, AI for enterprises, AI solutions for enterprises, AI consulting for enterprises, AI integration for enterprises, AI-driven solutions for enterprises, digital transformation in enterprises, intelligent automation in enterprises"
        />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </FeedbackProvider>
    </>
  );
}
