import Link from "next/link";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import styles from "./page.module.css";
import crow from "./assets/raven.svg";

export default function Home() {
  return (
    <main className={[GeistSans.className, styles.home].join(" ")}>
      <nav>
        <div className={styles.profile}>
          <Image
            src={crow}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <div className={styles.profileInfo}>
            <p>Ewerton Luís</p>
            <p>Software Developer</p>
          </div>
        </div>

        <div className={styles.menu}>
          <Link href="/" className={styles.menuLink}>
            <p>Home</p>
          </Link>
          <Link href="/blog" className={styles.menuLink}>
            <p>Writing</p>
          </Link>
          <Link href="/" className={styles.menuLink}>
            <p>Socials</p>
          </Link>
        </div>
      </nav>

      <section className={styles.aboutMe}>
        <p>
          Hi 👋 I'm Ewerton, a dedicated Software Developer with strong
          technical aptitude and continuous enthusiasm for learning and
          innovation. Proficient in agile development practices and committed to
          delivering high-quality code, emphasizing reusability and
          maintainability.
        </p>
        <p>🌱 Currently focused on React, JavaScript, TypeScript and DevOps.</p>
        <p>
          💡 This blog aims to chronicle my programming experiences. It will
          serve as a platform to share what I’ve learned, the challenges I’ve
          encountered, and the solutions I’ve discovered along the way. I hope
          these reflections prove helpful to fellow enthusiasts.
        </p>
      </section>

      <section className={styles.recentArt}>
        <h2>Recent Writing</h2>
      </section>
    </main>
  );
}
