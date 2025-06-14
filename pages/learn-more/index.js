import ArticleCard from '@/src/components/learnmorepage/ArticleCard';
import path from 'path';
import fs from 'fs';

export default function LearnMore({ articles }) {
    return (
        <div className="learn-more-container">
            <h1>Learn More</h1>
            <p>Explore our collection of articles to deepen your knowledge on various topics.</p>
            
            <div className="article-cards">
                {articles.map(article => (
                    <ArticleCard 
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        imageUrl={article.imageUrl || "/white-logo.png"}
                        articleUrl={article.articleUrl || "#"}
                    />
                ))}
            </div>
        </div>
    );
}

// This function runs at build time on the server
export async function getStaticProps() {
    // Read articles data from the file system
    const filePath = path.join(process.cwd(), "data", "articles_data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const articles = JSON.parse(fileContents);

    return {
        props: {
            articles,
        },
        // Re-generate the page at most once per day (in seconds)
        revalidate: 86400,
    };
}