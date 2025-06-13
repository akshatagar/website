import Link from 'next/link';
import Image from 'next/image';

export default function ArticleCard({ title, description, imageUrl, articleUrl }) {
  return (
    <div className="article-card">
      <div className="article-card__image-container">
        <Image 
          src={imageUrl} 
          alt={title}
          width={400}
          height={200}
          className="article-card__image"
        />
      </div>
      <div className="article-card__content">
        <h3 className="article-card__title">{title}</h3>
        <p className="article-card__description">{description}</p>
        <Link href={articleUrl} className="article-card__link">
          Read More
        </Link>
      </div>
    </div>
  );
};
