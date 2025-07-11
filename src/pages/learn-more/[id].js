import CategoryPage from "@/src/components/learnmorepage/CategoryPage";
import { client } from "@/lib/sanity";

export async function getStaticPaths() {
  const categories = ["bfsi", "corporate", "misc"];

  const paths = categories.map((category) => ({
    params: { id: category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = params.id;
  const articles = await client.fetch(`
        *[_type == "article" &&  "${category}" in categories] | order(date desc) {
            title,
            description,
            articleUrl,
            "imageUrl": image.asset->url
        }
    `);

  return {
    props: {
      articles,
      category
    },
  };
}

export default function LearnMorePage({ articles, category }) {
  const categories = {
    "bfsi": "BFSI",
    "corporate": "Corporate",
    "misc": "Miscellaneous",
  };
  return (
    <CategoryPage articles={articles} heading={categories[category]} />
  );
}
