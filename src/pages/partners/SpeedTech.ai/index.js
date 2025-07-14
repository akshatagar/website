import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function SpeedTechPage({ partner, idx }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const showIframe = (key) => {
    setActiveCaseStudy((prev) => (prev === key ? null : key));
  };

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
          className="btn btn-outline-light"
          style={{ marginBottom: "20px", width: "75px" }}
        >
          &larr;
        </button>
      </Link>
      <div className="card p-4">
        <div style={{ display: "flex" }}>
          <Image
            src={partner.carouselLogo}
            alt="SpeedTech.ai Logo"
            width={155}
            height={75}
          />
          <h1 style={{ fontSize: "1.75rem", margin: "0 auto" }}>
            <span style={{ fontWeight: "bold" }}>RAIYA</span> - Responsive AI
            Yield Assistant
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "10px",
            marginBottom: "15px",
          }}
          className="gap-5"
        >
          <div
            className="card partner-card"
            style={{ border: "2px solid black", width: "500px" }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                margin: "0 auto",
                marginTop: "15px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>RAIYA</span> - Concierge and
              Telephony
            </h2>
            <div className="card-body text-center">
              <img
                className="card-img mt-4"
                src="/SpeedTechPage/SpeedTechGraphic2.png"
                alt="carousel-graphic"
                style={{ maxHeight: "300px", maxWidth: "600px" }}
              />
            </div>
          </div>
          <div
            className="card partner-card"
            style={{ border: "2px solid black", width: "500px" }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                margin: "0 auto",
                marginTop: "15px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>RAIYA</span> - Intelligent
              Document Processing
            </h2>
            <div className="card-body text-center">
              <img
                className="card-img mt-4"
                src="/SpeedTechPage/SpeedTechGraphic.png"
                alt="carousel-graphic"
                style={{ maxHeight: "300px", maxWidth: "600px", marginBottom: "10px" }}
              />
              <video width="400" height="250" controls>
                <source src="/SpeedTechPage/IDPVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button
            className={`btn ${
              activeCaseStudy === "ajww" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => showIframe("ajww")}
          >
            View AJWW Case Study
          </button>
          <button
            className={`btn ${
              activeCaseStudy === "tk" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => showIframe("tk")}
          >
            View TK Case Study
          </button>
        </div>
        <a
          href={partner.website}
          className="text-center mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn btn-dark">
            Visit Website
          </button>
        </a>
        {activeCaseStudy === "ajww" && (
          <iframe
            src="/embed/ajww_case_study.html"
            width="100%"
            height="500"
            style={{ border: "1px solid #ccc" }}
            title="AJWW Case Study"
          />
        )}

        {activeCaseStudy === "tk" && (
          <iframe
            src="/embed/tk_case_study.html"
            width="100%"
            height="500"
            style={{ border: "1px solid #ccc" }}
            title="TK Case Study"
          />
        )}
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
