import { getPosts } from "../_services/notion"

export default async function BlogHome() {
    const posts = await getPosts()
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}