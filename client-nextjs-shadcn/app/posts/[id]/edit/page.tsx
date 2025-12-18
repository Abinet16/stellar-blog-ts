"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../../../lib/api";
import { Post } from "../../../../lib/types";
import { useRouter } from "next/navigation";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [form, setForm] = useState<Post>({ id: "", title: "", content: "" });

  useEffect(() => {
    async function load() {
      const post = await apiGet<Post>(`/posts/${params.id}`);
      setForm(post);
    }
    load();
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await apiPost(`/posts/${params.id}`, form);
    router.push(`/posts/${params.id}`);
  }

  return (
    <div>
      <h1>Edit Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button>Save</button>
      </form>
    </div>
  );
}
