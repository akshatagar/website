export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark">
      <div className="container-fluid">
        <img src="white-logo.png" alt="" className="logo" />
        <a className="navbar-brand" href="/">
          OMiNTEL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                <button
                  type="button"
                  className="btn btn-dark btn-lg px-4 me-md-2"
                >
                  About
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact-us">
                <button
                  type="button"
                  className="btn btn-dark btn-lg px-2 me-md-2"
                >
                  Contact us
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/partners">
                <button
                  type="button"
                  className="btn btn-dark btn-lg px-4 me-md-2"
                >
                  Partners
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
