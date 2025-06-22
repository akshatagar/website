import ArticleCard from '../../components/learnmorepage/ArticleCard';
import articlesData from '../../data/articles_data.json';

export default function LearnMore() {
    return (
        <div className="learn-more-container">
            <h1>Learn More</h1>
            <p>Explore our collection of articles to deepen your knowledge on various topics.</p>
            
            <div className="article-cards">
                {articlesData.map(article => (
                    <ArticleCard 
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        imageUrl={article.imageUrl}
                        articleUrl={article.articleUrl}
                    />
                ))}
            </div>
        </div>
    );
}