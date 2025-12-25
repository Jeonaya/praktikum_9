"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { posts } from "../../../data/posts";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 mt-10">
        Artikel tidak ditemukan!
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      <div className="text-gray-500 mb-6">
        <div>
          <span className="font-medium">Author:</span> {post.author}
        </div>
        <div>
          <span className="font-medium">Date:</span> {post.date}
        </div>
      </div>

      <p className="text-lg">{post.content}</p>

      <div className="mt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Kembali ke Daftar
        </Link>
      </div>
    </article>
  );
}
