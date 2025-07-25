import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function RouteMobilePage({ partner, idx }) {
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
        {/* Carousel Logo */}
        <div className="mb-4">
          <Image
            src={partner.carouselLogo}
            alt="Route Mobile Logo"
            width={155}
            height={45}
            className="img-fluid"
          />
        </div>

        {/* First Graphic */}
        <div className="mb-4 text-center">
          <img
            src="/RouteMobilePage/RouteMobileGraphic.png"
            alt="Venn diagram"
            className="img-fluid"
            style={{ maxWidth: "40%", height: "auto" }}
          />
        </div>

        {/* Second Graphic */}
        <div className="mb-4 text-center">
          <img
            src="/RouteMobilePage/RouteMobileGraphic2.png"
            alt="Graphic 2"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
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

  const partner = partners.find((p) => p.name === "Route Mobile") || null;
  const idx = partners.indexOf(partner);

  return {
    props: {
      partner,
      idx,
      revalidate: 60,
    },
  };
}
