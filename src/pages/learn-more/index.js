import ArticleCard from "../../components/learnmorepage/ArticleCard";
import { client } from "@/lib/sanity";

export async function getStaticProps() {
  const query = `*[_type == "article"]{
        title,
        description,
        articleUrl,
        "imageUrl": image.asset->url
      }`;
  const articles = await client.fetch(query);

  return {
    props: { articles },
    revalidate: 60,
  };
}

export default function LearnMore({ articles }) {
  return (
    <div className="learn-more-container">
      <h1>Learn More</h1>
      <p>
        Explore our collection of articles to deepen your knowledge on various
        topics.
      </p>

      <div className="article-cards">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
}
