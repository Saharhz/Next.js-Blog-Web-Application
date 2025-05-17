import React from "react";
import { NextResponse } from "next/server";
import { saveBlog } from "../../lib/blogs";

export async function POST(req: Request) {
  const data = await req.json();
  await saveBlog(data);
  return NextResponse.json({ message: "Blog Saved" });
}
