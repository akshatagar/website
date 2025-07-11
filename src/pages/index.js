import Hero from "../components/homepage/Hero"
import AboutUs from "../components/homepage/AboutUs"
import { client } from '@/lib/sanity'


export default function Home({partners, aboutUs}) {
    return (
        <>
            <Hero partners={partners} aboutUs={aboutUs}/>
            <AboutUs aboutUs={aboutUs} partners={partners}/>
        </>
    )
}

export async function getStaticProps() {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name,
      "logoUrl": logo.asset->url
    }
  `)

  const aboutUs = await client.fetch(`
    *[_type == "homepage"][0] {
      aboutUsText,
      howWeDoIt
    }
  `)

  return {
    props: { partners, aboutUs },
    revalidate: 60,
  }
}
