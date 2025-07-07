import ArticleCard from "./ArticleCard";
import styles from "./LearnMore.module.css";
import Link from "next/link";

export default function CategoryPage({ articles, heading }) {
    return (
      <div className={styles.learnMoreContainer}>
        <Link href="/learn-more">
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ marginBottom: "20px", width: "75px" }}
        >
          &larr;
        </button>
      </Link> 
        <h1>{heading}</h1>
        <div className={styles.articleCards}>
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    );
  }