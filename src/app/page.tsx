import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import styles from "./page.module.css";
import { At, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getPosts } from "./_services/notion";

export default async function Home() {
  const posts = await getPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main className={[GeistSans.className, styles.home].join(" ")}>
      <nav>
        <div className={styles.profile}>
          <At size={34} />
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
        <h2>Latest Articles</h2>

        <div>
          <ul>
            {recentPosts.map((post) => (
              <li key={post.id}>
                <a href={`/blog/${post.slug}`}>
                  <h3>{post.title}</h3>

                  <p>
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long",
                      timeZone: "America/Sao_Paulo",
                    }).format(new Date(post.createdAt))}
                  </p>

                  <div className={styles.recentArtTags}>
                    {post.tags.map((tag) => (
                      <span>{tag}</span>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/blog" >
          <div className={styles.smBtn}>
            <p>See More</p>
            <ArrowRight size={20} />
          </div>
        </Link>
      </section>
    </main>
  );
}

export const dynamic = "force-dynamic";
