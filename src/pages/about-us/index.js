import AboutUs from "../../components/aboutpage/AboutUs"
import { client } from '@/lib/sanity'


export async function getStaticProps() {

  const aboutUs = await client.fetch(`
    *[_type == "homepage"][0] {
      aboutUsText,
      howWeDoIt
    }
  `)

  return {
    props: { aboutUs },
    revalidate: 60,
  }
}


export default function AboutPage( { aboutUs } ) {
    return (
        <>
          <AboutUs aboutUs={aboutUs}/>
        </>
    )
}


