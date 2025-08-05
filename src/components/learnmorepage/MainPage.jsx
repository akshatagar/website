import Link from "next/link";
import styles from "./LearnMore.module.css";

export default function MainPage() {
    const categories = [
      { name: "bfsi", title: "BFSI" },
      { name: "corporate", title: "Corporate" },
      { name: "misc", title: "Miscellaneous" },
    ];
  
    return (
      <div className={styles.learnMoreContainer}>
        <h1>Learn More</h1>
        <p>
          Explore our collection of articles.
        </p>
  
        <div className={styles.articleCards}>
          {categories.map((category) => (
            <div className={styles.learnMoreCardContainer}>
            <Link href={`/learn-more/${category.name}`} style={{ textDecoration: "none" }} key={category.name} >
            <div className={styles.learnMoreCardTitle}>{category.title}</div>
            <div className={styles.learnMoreCard} style={{ backgroundImage: `url(${category.name}.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  