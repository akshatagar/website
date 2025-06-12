import NavBar from "@/src/components/general/NavBar";
import Footer from "@/src/components/general/Footer";

export default function MainLayout({ children }) {
  return (
    <html>
      <head>
        <title>OMiNTEL</title>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
