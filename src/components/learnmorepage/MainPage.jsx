import Link from "next/link";
import styles from "./LearnMore.module.css";

export default function MainPage() {
    const categories = [
      { name: "banking", title: "Banking" },
      { name: "ai", title: "AI" },
      { name: "misc", title: "Miscellaneous" },
    ];
  
    return (
      <div className={styles.learnMoreContainer}>
        <h1>Learn More</h1>
        <p>
          Explore our collection of articles to deepen your knowledge on various
          topics.
        </p>
  
        <div className={styles.articleCards}>
          {categories.map((category) => (
            <Link href={`/learn-more/${category.name}`} className={styles.learnMoreCard} key={category.name} >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  