import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function SpeedTechPage({ partner, idx }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="container my-5">
      <Link
        href={{
          pathname: "/partners",
          query: { id: idx },
        }}
      >
        <button
          type="button"
          className="btn btn-outline-light mb-3"
          style={{ width: "75px" }}
        >
          &larr;
        </button>
      </Link>

      <div className="card p-4">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row align-items-center mb-4">
          <Image
            src={partner.carouselLogo}
            alt="SpeedTech.ai Logo"
            width={155}
            height={75}
            className="mb-3 mb-md-0 me-md-3"
          />
          <h1 className="text-center text-md-start fs-4 fw-bold">
            <span style={{ fontWeight: "bold" }}>RAIYA</span> - Responsive AI
            Yield Assistant
          </h1>
        </div>

        {/* Graphics Cards */}
        <div className="row justify-content-center g-4 mb-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border border-dark">
              <h2 className="text-center mt-3 fs-5">
                <strong>RAIYA</strong> - Concierge and Telephony
              </h2>
              <div className="card-body text-center">
                <img
                  className="img-fluid"
                  src="/SpeedTechPage/SpeedTechGraphic2.png"
                  alt="carousel-graphic"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border border-dark">
              <h2 className="text-center mt-3 fs-5">
                <strong>RAIYA</strong> - Intelligent Document Processing
              </h2>
              <div className="card-body text-center">
                <img
                  className="img-fluid mb-3"
                  src="/SpeedTechPage/SpeedTechGraphic.png"
                  alt="carousel-graphic"
                  style={{ maxHeight: "300px" }}
                />
                <video
                  controls
                  className="w-100"
                  style={{ maxHeight: "250px" }}
                >
                  <source src="/SpeedTechPage/IDPVideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Image button to toggle dropdown */}
        <div style={{ textAlign: "right", position: "relative", marginBottom: "10px" }}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              padding: 0
            }}
          >
            <Image
              src="/case-studies-graphic.png"
              width={105}
              height={70}
              alt="Case Studies"
            />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div
              className="bg-white border rounded mt-2"
              style={{
                position: "absolute",
                right: 0,
                zIndex: 10,
                minWidth: "200px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                onClick={() => {
                  setActiveCaseStudy("ajww");
                  setDropdownOpen(false);
                }}
              >
                Client 1 Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                onClick={() => {
                  setActiveCaseStudy("tk");
                  setDropdownOpen(false);
                }}
              >
                Client 2 Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 text-danger"
                onClick={() => {
                  setActiveCaseStudy(null);
                  setDropdownOpen(false);
                }}
              >
                Hide Case Study
              </button>
            </div>
          )}
        </div>

        {/* Iframes */}
        {activeCaseStudy === "ajww" && (
          <iframe
            src="/SpeedTechPage/ajww_case_study.html"
            width="100%"
            height="500"
            style={{ border: "1px solid #ccc" }}
            title="AJWW Case Study"
          />
        )}
        {activeCaseStudy === "tk" && (
          <iframe
            src="/SpeedTechPage/tk_case_study.html"
            width="100%"
            height="500"
            style={{ border: "1px solid #ccc" }}
            title="TK Case Study"
          />
        )}

        {/* Website Button */}
        <button
          type="button"
          className="btn btn-dark text-center mb-3"
          style={{ width: "125px", margin: "0 auto", marginTop: "10px"}}
          onClick={() =>
            window.open(partner.website, "_blank", "noopener,noreferrer")
          }
        >
          Visit Website
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name,
      description,
      website,
      "logoUrl": logo.asset->url,
      "carouselLogo": carouselLogoImage.asset->url
    }
  `);

  const partner = partners.find((p) => p.name === "SpeedTech.ai") || null;
  const idx = partners.indexOf(partner);

  return {
    props: {
      partner,
      idx,
      revalidate: 60,
    },
  };
}
