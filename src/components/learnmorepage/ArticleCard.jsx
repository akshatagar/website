import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-card__image-container">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={200}
          height={200}
          className="article-card__image"
        />
      </div>
      <div className="article-card__content">
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__description">{article.description}</p>
      </div>
      <div className="article-card__footer">
        <a href={article.articleUrl} className="article-card__link" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}
