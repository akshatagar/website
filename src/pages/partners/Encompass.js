import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function EncompassPage({ partner, idx }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

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
        {/* Partner Logo */}
        <div className="mb-4">
          <Image
            src={partner.carouselLogo}
            alt="encompass-logo"
            width={250}
            height={45}
            className="img-fluid"
          />
        </div>

        {/* Responsive Iframes */}
        <div className="row justify-content-center gy-4">
          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                title="EC Private Outreach Explainer Video"
                src="https://fast.wistia.net/embed/iframe/kbgynujqbl?dnt=1"
                allow="autoplay; fullscreen"
                allowTransparency="true"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                title="EC Public Automation overview Video"
                src="https://fast.wistia.net/embed/iframe/9e1po77f1d?dnt=1"
                allow="autoplay; fullscreen"
                allowTransparency="true"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Website Button */}
        <button
          type="button"
          className="btn btn-dark mt-4 text-center"
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
