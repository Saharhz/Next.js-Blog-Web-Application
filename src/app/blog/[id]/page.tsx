import React from "react";
import Image from "next/image";
import Comments from "./comments";
import { getBlogById } from "../../lib/blogs";

export default async function Blogpage({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500">By {blog.author}</p>
      <Image
        src="/blog-banner.jpg"
        alt="Banner"
        width={800}
        height={300}
        className="my-4"
      />
      <p className="mb-6">{blog.body}</p>
      <Comments blogId={params.id} />
    </main>
  );
}
