import Hero from "../components/homepage/Hero"
import AboutUs from "../components/aboutpage/AboutUs"
import { client } from '@/lib/sanity'

export default function Home( { partners }) {


    return (
        <>
            <Hero partners={partners}/>
        </>
    )
}

export async function getStaticProps() {
  const partners = await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      name,
      logoHue,
      "logoUrl": logo.asset->url
    }
  `)

  return {
    props: { partners },
    revalidate: 60,
  }
}
