import PartnersCarousel from "../../components/partnerspage/PartnerCarousel";
import { client } from '@/lib/sanity'

export default function PartnersPage({ partners }) {
  return (
      <PartnersCarousel partners={partners} />
  );
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
  `)

  return {
    props: { partners },
    revalidate: 60,
  }
}

