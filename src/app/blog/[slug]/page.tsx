import { getPost } from "@/app/_services/notion";
import ReactMarkdown from "react-markdown";
import { GeistSans } from "geist/font/sans";
import styles from "./page.module.css";
import PrismLoader from "@/app/components/prism-loader";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <div className={[GeistSans.className, styles.post].join(" ")}>
      <h1>{post.title}</h1>
      <span>
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
          timeZone: "America/Sao_Paulo",
        }).format(new Date(post.createdAt))}
      </span>
      <div className={styles.space}></div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <PrismLoader />
    </div>
  );
}

export const dynamic = "force-dynamic";
