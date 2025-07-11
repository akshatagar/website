import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function PartnerPage({ partner, idx }) {    
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const showIframe = (key) => {
    setActiveCaseStudy((prev) => (prev === key ? null : key));
  };

  return (
    <div className="container my-5">
      <Link href={{
                    pathname:'/partners',
                    query: { id: idx}
                  }}>
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ marginBottom: "20px", width: "75px" }}
        >
          &larr;
        </button>
      </Link>
      <div className="card p-4">
        <h1 className="mb-4 text-center">{partner.name}</h1>
        <div style={{ margin: "0 auto"}} className="mb-4">
        <img
          src={partner.logoUrl}
          alt={`${partner.name}-logo`}
          style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "contain" }}
        />
        {partner.name === "Route Mobile" && (<Image
          width={100}
          height={75}
          src="/Proximus_logo1.png"
          alt={`proximus-logo`}
        />)}
        </div>
        <PortableText value={partner.description} />
        <a
          href={partner.website}
          className="text-center mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn btn-dark">
            Visit Website
          </button>
        </a>
        {partner.name === "SpeedTech.ai" && (
          <div className="mt-5 text-center">
            <h3 className="mb-4">Case Studies</h3>

            <div className="d-flex justify-content-center gap-3 mb-4">
              <button
                className={`btn ${
                  activeCaseStudy === "ajww"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => showIframe("ajww")}
              >
                View AJWW Case Study
              </button>
              <button
                className={`btn ${
                  activeCaseStudy === "tk"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => showIframe("tk")}
              >
                View TK Case Study
              </button>
            </div>

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
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name
    }
  `);

  const paths = partners.map((partner) => ({
    params: { id: partner.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name,
      description,
      website,
      "logoUrl": logo.asset->url
    }
  `);

  const partner = partners.find((p) => p.name === params.id) || null;
  const idx = partners.indexOf(partner);

  return {
    props: {
      partner,
      idx,
      revalidate: 60,
    },
  };
}
