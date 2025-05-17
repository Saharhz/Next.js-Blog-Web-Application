import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "./lib/blogs";

export default async function Home() {
  const blogs = await getAllBlogs;
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {Array.isArray(blogs) ? (
        blogs.map((blog) => (
          <div key={blog.id} className="mb-6">
            <Link href={`/blog/${blog.id}`}>
              <h2 className="text-xl font-semibold text-blue-600">
                {blog.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">By {blog.author}</p>
            <p>{blog.body.slice(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p>Failed to load blog list.</p>
      )}
    </main>
  );
}
