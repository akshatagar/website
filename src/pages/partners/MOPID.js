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
          <Image
            src={partner.carouselLogo}
            alt="MOPID Logo"
            width={155}
            height={45}
            className="img-fluid"
          />
        </div>

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

        </div>

          {/* Dropdown
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
                  setActiveCaseStudy("bfc");
                  setDropdownOpen(false);
                }}
              >
                Bahrain Finance Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                onClick={() => {
                  setActiveCaseStudy("bom");
                  setDropdownOpen(false);
                }}
              >
                Bank of Maharashtra Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                onClick={() => {
                  setActiveCaseStudy("delhi_metro");
                  setDropdownOpen(false);
                }}
              >
                Delhi Metro Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                onClick={() => {
                  setActiveCaseStudy("gipl");
                  setDropdownOpen(false);
                }}
              >
                GIPL Case Study
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
        
        <div ref={caseStudyRef}>
          {/* Iframes 
          {activeCaseStudy && (
            <img
              className="img-fluid mb-3"
              src={`/RouteMobilePage/${activeCaseStudy}.png`}
              alt="carousel-graphic"
            />
          )}
        </div> */}

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
