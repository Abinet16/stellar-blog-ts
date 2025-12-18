"use server";

import { Post } from "@/lib/types";

export async function createPostAction(data: FormData): Promise<Post> {
  const title = data.get("title") as string;
  const content = data.get("content") as string;

  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
}
