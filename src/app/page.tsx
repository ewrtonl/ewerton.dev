import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">
      <p>Home</p>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
    </main>
  );
}
