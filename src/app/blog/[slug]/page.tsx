import { getPost } from "@/app/_services/notion";
import ReactMarkdown from "react-markdown";
import { GeistSans } from "geist/font/sans";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <div className={GeistSans.className}>
        <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export const dynamic = "force-dynamic";
