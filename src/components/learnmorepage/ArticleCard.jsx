import Image from "next/image";
import styles from './ArticleCard.module.css';

export default function ArticleCard({ article }) {
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleCardImageContainer}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          className={styles.articleCardImage}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.articleCardContent}>
        <h3 className={styles.articleCardTitle}>{article.title}</h3>
        <p className={styles.articleCardDescription}>{article.description}</p>
      </div>
      <div className={styles.articleCardFooter}>
        <a href={article.articleUrl} className={styles.articleCardLink} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}
