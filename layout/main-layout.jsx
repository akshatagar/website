import NavBar from "@/src/components/general/NavBar";
import Footer from "@/src/components/general/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 w-100 overflow-hidden">
      <NavBar />
      <main className="flex-grow-1 w-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
