import { getPosts } from "../_services/notion";
import { GeistSans } from "geist/font/sans";
import styles from "./page.module.css";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default async function BlogHome() {
  const posts = await getPosts();
  return (
    <div className={[GeistSans.className, styles.articlesBox].join(" ")}>
      <div>
        <Link href="/" className={styles.menuLink}>
        <ArrowLeft size={25} />
        </Link>
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
