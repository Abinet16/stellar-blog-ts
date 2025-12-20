"use server";

import { Post } from "../../../lib/types";

export async function createPostAction(formData: FormData): Promise<Post> {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  return res.json();
}
