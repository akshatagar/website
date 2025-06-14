import NavBar from "@/src/components/general/NavBar";
import Footer from "@/src/components/general/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
