import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-fluid py-3 border-top text-white">
      <div className="row gy-3 align-items-center">
        <div className="col-12 col-md-4 col-lg-4 text-center text-md-start">
          <span>© 2025 Omintel</span>
        </div>
        
        <div className="col-12 col-md-4 col-lg-4 text-center" id="contact-us">
          <div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <a href="mailto:email@website.com" className="text-white text-decoration-none">email@website.com</a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="tel:6666666666" className="text-white text-decoration-none">666 666 6666</a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4 text-center text-md-end">
          <div className="d-flex justify-content-center justify-content-md-end align-items-center">
            <Link href="/feedback" className="me-3">
              <button type="button" className="btn custom-btn">
                Feedback
              </button>
            </Link>
            <div className="social-links">
              <Link href="#" className="text-white me-2" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                </svg>
              </Link>
              <Link href="#" className="text-white" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
