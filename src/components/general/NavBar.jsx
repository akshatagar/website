import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark w-100">
      <div className="container-fluid px-3">
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <Image
            width={40}
            height={40}
            src="/white-logo.png"
            alt="omintel-logo"
            className="logo"
            priority
          />
          <span className="navbar-brand mb-0">OMiNTEL</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button
                className="btn btn-dark btn-lg dropdown-toggle me-md-2 mt-2"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Home
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" href="/#about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/#contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/partners">
                <button type="button" className="btn btn-dark btn-lg me-md-2">
                  Partners
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/learn-more">
                <button type="button" className="btn btn-dark btn-lg me-md-2">
                  Learn More
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
