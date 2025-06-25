import ArticleCard from "@/src/components/learnmorepage/ArticleCard";
import { client } from "@/lib/sanity";

export async function getStaticPaths() {
  const categories = ["banking", "ai", "misc"];

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
      articles
    },
  };
}

export default function LearnMore({ articles }) {
  return (
    <div className="learn-more-container">
      <h1>Learn More</h1>
      <div className="article-cards">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
}
