import ArticleCard from "./ArticleCard";
import styles from "./LearnMore.module.css";

export default function CategoryPage({ articles }) {
    return (
      <div className={styles.learnMoreContainer}>
        <h1>Learn More</h1>
        <div className={styles.articleCards}>
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    );
  }