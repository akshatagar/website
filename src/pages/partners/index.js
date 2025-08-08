import { useState, useEffect } from "react";
import PartnersCarousel from "../../components/partnerspage/PartnerCarousel";
import PartnerCarouselMobile from "../../components/partnerspage/PartnerCarouselMobile";
import { client } from '@/lib/sanity';

export default function PartnersPage({ partners }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // adjust breakpoint as needed
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile 
    ? <PartnerCarouselMobile partners={partners} />
    : <PartnersCarousel partners={partners} />;
}

export async function getStaticProps() {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name,
      solution,
      summary,
      "logoUrl": logo.asset->url,
      "carouselLogo": carouselLogoImage.asset->url,
      carouselSubtext,
      "carouselGraphic": carouselGraphic.asset->url
    }
  `);

  return {
    props: { partners },
    revalidate: 60,
  };
}
