import Hero from "../components/homepage/Hero"
import AboutUs from "../components/aboutpage/AboutUs"
import { client } from '@/lib/sanity'
import { useRouter } from 'next/router';
import FeedbackForm from "../components/feedbackpage/FeedbackForm";
import { useFeedback } from '../components/contexts/FeedbackContext';


export default function Home( { partners }) {

  const { showFeedback, setShowFeedback } = useFeedback();

    return (
        <>
            <Hero partners={partners}/>
            {showFeedback && (
            <FeedbackForm onClose={() => setShowFeedback(false)} />
          )}
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
