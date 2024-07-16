import { getPosts } from "../_services/notion";
import { GeistSans } from "geist/font/sans";
import styles from "./page.module.css";
import Nav from "../components/Nav/nav";

export default async function BlogHome() {
  const posts = await getPosts();
  return (
    <div className={[GeistSans.className, styles.articlesBox].join(" ")}>
      <Nav/>
      <div className={styles.box}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                    timeZone: "America/Sao_Paulo",
                  }).format(new Date(post.createdAt))}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
