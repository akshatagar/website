import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="learn-more-container">
      <h1>Learn More</h1>
      <p>
        Explore our collection of articles to deepen your knowledge on various
        topics.
      </p>

      <div className="article-cards">
        <Link href="/learn-more/banking" className="learn-more-card">
          Banking
        </Link>
        <Link href="/learn-more/ai" className="learn-more-card">
          AI
        </Link>
        <Link href="/learn-more/misc" className="learn-more-card">
          Miscellaneous
        </Link>
      </div>
    </div>
  );
}
