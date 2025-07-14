import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function EncompassPage({ partner, idx }) {
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
        {/* <div className="d-flex justify-content-center gap-3 mb-4">
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
        </div> */}
        <Image
          src={partner.carouselLogo}
          alt="encompass-logo"
          width={250}
          height={45}
        />
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "15px",
            marginBottom: "15px",
          }}
          className="gap-5"
        >
          <iframe title="EC Private Outreach Explainer Video" src="https://fast.wistia.net/embed/iframe/kbgynujqbl?dnt=1" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" class="wistia_embed" name="wistia_embed" msallowfullscreen="" width="400" height="225"></iframe>
          <iframe title="EC Public Automation overview Video" src="https://fast.wistia.net/embed/iframe/9e1po77f1d?dnt=1" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" class="wistia_embed" name="wistia_embed" msallowfullscreen="" width="400" height="225"></iframe>
        </div>
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
        {/* {activeCaseStudy === "ajww" && (
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
        )} */}
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

  const partner = partners.find((p) => p.name === "Encompass") || null;
  const idx = partners.indexOf(partner);

  return {
    props: {
      partner,
      idx,
      revalidate: 60,
    },
  };
}
