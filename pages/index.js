import Hero from "@/src/components/homepage/Hero"
import AboutUs from "@/src/components/homepage/AboutUs"

export default function Home({ imageData }) {
    return (
        <>
            <Hero imageData={imageData} />
            <AboutUs />
        </>
    )
}

// This function runs at build time on the server
export async function getStaticProps() {
  // Pre-load image data
  const imageData = {
    centralLogo: '/blue-gold-logo.png',
    whiteLogo: '/white-logo.png',
    // Add any other data you want to pass to your components
  };

  return {
    props: {
      imageData,
    },
    // Re-generate the page at most once per day (in seconds)
    // Remove this or set to false if you want to generate only at build time
    revalidate: 86400,
  }
}
