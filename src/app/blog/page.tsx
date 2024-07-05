import { getPosts } from "../_services/notion";

export default async function BlogHome() {
  const posts = await getPosts();
  return (
    <div className="font-sans">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-5">

            <a href={`/blog/${post.slug}`} className="text-lg underline">{post.title}</a>

            <p className="text-sm">{post.description}</p>

            <div className="space-x-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-sm">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeZone: "America/Sao_Paulo",
              }).format(new Date(post.createdAt))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dynamic = "force-dynamic";
