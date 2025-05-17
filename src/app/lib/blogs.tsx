import React from "react";

let blogs = [
  {
    id: "1",
    title: "First Blog",
    author: "Alice",
    body: "This is the first blog post.",
  },
  {
    id: "2",
    title: "Second Blog",
    author: "Bob",
    body: "This is another great post.",
  },
];

export async function getAllBlogs(): Promise<typeof blogs> {
  console.log("getAllBlogs called, returning:", blogs);
  return blogs;
}

export async function getBlogById(id: string) {
  return blogs.find((b) => b.id === id)!;
}

export async function saveBlog(blog: {
  title: string;
  author: string;
  body: string;
}) {
  const newBlog = { ...blog, id: String(Date.now()) };
  blogs.push(newBlog);
}
