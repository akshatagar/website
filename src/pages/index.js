import Hero from "../components/homepage/Hero"
import AboutUs from "../components/homepage/AboutUs"
import { client } from '@/lib/sanity'


export default function Home({partners}) {
    return (
        <>
            <Hero partners={partners}/>
            <AboutUs />
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

  return {
    props: { partners },
    revalidate: 60,
  }
}
