import { useState, useRef, useEffect } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function MOPIDPage({ partner, idx }) {
  const [activeEmbed, setActiveEmbed] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [walletDropdownOpen, setWalletDropdownOpen] = useState(false);

  const embedRef = useRef(null);

  useEffect(() => {
    if (activeEmbed && embedRef.current) {
      embedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeEmbed]);

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
            alt="Brain Station 23 Logo"
            width={200}
            height={90}
            className="img-fluid"
          />
        </div>

        {/* Products Header */}
        <h3
          className="text-center mb-4 position-relative d-inline-block"
          style={{ fontWeight: "bold" }}
        >
          Products
          <span
            style={{
              display: "block",
              width: "60px",
              height: "4px",
              backgroundColor: "#F26D4D",
              margin: "8px auto 0",
              borderRadius: "2px",
            }}
          ></span>
        </h3>

        {/* Products Inline Boxes */}
        <div
          className="d-flex justify-content-center flex-wrap mb-4"
          style={{
            gap: "20px",
          }}
        >
          {/* Wallet 23 */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "180px",
              height: "120px",
              cursor: "pointer",
              position: "relative",
              borderRadius: "15px",
              background: "linear-gradient(135deg, #f9f9f9, #ececec)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.3s ease",
              flex: "1 1 200px", // ✅ makes them responsive
              textAlign: "center",
            }}
            onClick={() => setWalletDropdownOpen((prev) => !prev)}
          >
            Wallet 23
            {walletDropdownOpen && (
              <div
                className="bg-white border rounded mt-2"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 10,
                  minWidth: "200px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <button
                  className="dropdown-item w-100 text-start px-3 py-2 border-bottom"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEmbed("/BrainStationPage/wallet23_onepage.pdf");
                    setWalletDropdownOpen(false);
                  }}
                >
                  Wallet 23 Onepager
                </button>

                <button
                  className="dropdown-item w-100 text-start px-3 py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEmbed("/BrainStationPage/wallet23_brochure.pdf");
                    setWalletDropdownOpen(false);
                  }}
                >
                  Wallet 23 Brochure
                </button>
              </div>
            )}
          </div>

          {/* Remity */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "180px",
              height: "120px",
              cursor: "pointer",
              borderRadius: "15px",
              background: "linear-gradient(135deg, #f9f9f9, #ececec)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.3s ease",
              flex: "1 1 200px", // ✅ responsive
              textAlign: "center",
            }}
            onClick={() =>
              setActiveEmbed("/BrainStationPage/remity_onepage.pdf")
            }
          >
            Remity
          </div>

          {/* eKYC23 */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "180px",
              height: "120px",
              cursor: "pointer",
              borderRadius: "15px",
              background: "linear-gradient(135deg, #f9f9f9, #ececec)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.3s ease",
              flex: "1 1 200px", // ✅ responsive
              textAlign: "center",
            }}
            onClick={() =>
              setActiveEmbed("/BrainStationPage/eKYC23_onepage.pdf")
            }
          >
            eKYC23
          </div>
        </div>

        {/* Case Studies Dropdown */}
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
                  setActiveEmbed("/BrainStationPage/dvive.pdf");
                  setDropdownOpen(false);
                }}
              >
                DVIVE Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2"
                onClick={() => {
                  setActiveEmbed("/BrainStationPage/ethereum_souq.pdf");
                  setDropdownOpen(false);
                }}
              >
                Ethereum Souq Case Study
              </button>
              <button
                className="dropdown-item w-100 text-start px-3 py-2 text-danger"
                onClick={() => {
                  setActiveEmbed(null);
                  setDropdownOpen(false);
                }}
              >
                Hide Case Study
              </button>
            </div>
          )}
        </div>

        {/* Embed PDF Display */}
        <div ref={embedRef}>
          {activeEmbed && (
            <embed
              src={activeEmbed}
              type="application/pdf"
              width="100%"
              height="800"
              style={{ border: "1px solid #ccc" }}
            />
          )}
        </div>

        {/* Website Button */}
        <button
          type="button"
          className="btn btn-dark text-center mt-3"
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

  const partner = partners.find((p) => p.name === "Brain Station 23") || null;
  const idx = partners.indexOf(partner);

  return {
    props: {
      partner,
      idx,
      revalidate: 60,
    },
  };
}
