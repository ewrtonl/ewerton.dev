import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
    </main>
  );
}
