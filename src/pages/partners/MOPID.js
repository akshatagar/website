import { useState, useRef, useEffect } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function MOPIDPage({ partner, idx }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const caseStudyRef = useRef(null);

  useEffect(() => {
    if (activeCaseStudy && caseStudyRef.current) {
      caseStudyRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCaseStudy]);

  return (
    <div className="container my-5">
      {/* Back Button */}
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

      {/* Main Card */}
      <div className="card p-4">
        {/* Carousel Logo */}
        <div className="mb-4">
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <span style={{ color: "black" }}>Experience </span>
            <span style={{ color: "#F26D4D" }}>7 day hiring </span>
            <span style={{ color: "black" }}>with </span>
            <span style={{ color: "#F26D4D" }}>Mopid</span>
          </p>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="ratio ratio-16x9" style={{ width: "800px" }}>
            <iframe
              src="https://www.youtube.com/embed/6KiB2JjYOlk"
              title="Mopid Agent | MOPID"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <ul className="mt-5 mb-4 list-unstyled">
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-primary">•</span>
            Native connectors: SAP SuccessFactors, Oracle HCM, Workday,
            Greenhouse, Lever.
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-success">➤</span>
            Open REST / Webhook architecture for any ATS / HRIS.
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-warning">◆</span>
            Create a job in a single line.
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-danger">★</span>
            Reuse past JDs or drafts new ones via generative AI. Gets posted
            automatically to 5000+ job boards.
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-info">✎</span>
            Automated offer letter roll-out.
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-secondary">🤖</span>
            AI communication
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-primary">🎤</span>
            AI interviews
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-success">🔍</span>
            AI screening
          </li>
          <li className="d-flex align-items-start mb-3 fs-5">
            <span className="me-2 text-warning">⚡</span>
            Hiring Agent
          </li>
        </ul>

        {/* Image button to toggle dropdown */}
        <div
          style={{
            textAlign: "right",
            position: "relative",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
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
                  setActiveCaseStudy("apparel");
                  setDropdownOpen(false);
                }}
              >
                Apparel Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                onClick={() => {
                  setActiveCaseStudy("sigmoid");
                  setDropdownOpen(false);
                }}
              >
                Sigmoid Case Study
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

        <div ref={caseStudyRef} style={{ width: "100%" }}>
          {activeCaseStudy && (
            <embed
              src={`/MOPIDPage/${activeCaseStudy}.pdf`}
              type="application/pdf"
              style={{
                width: "100%",
                height: "800px",
                border: "1px solid #ccc",
              }}
            />
          )}
        </div>

        {/* Website Button */}
        <button
          type="button"
          className="btn btn-dark text-center"
          style={{ width: "125px", margin: "0 auto" }}
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

  const partner = partners.find((p) => p.name === "MOPID") || null;
  const idx = partners.indexOf(partner);

  return {
    props: {
      partner,
      idx,
      revalidate: 60,
    },
  };
}
