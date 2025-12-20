"use client";

import { useState } from "react";
import { apiPost } from "../../../lib/api";
import { useRouter } from "next/navigation";
import Protected from "../../../components/Protected";

export default function NewPostPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", content: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res:any = await apiPost("/posts", form);
    if (res._id) router.push(`/posts/${res._id}`);
  }

  return (
    <Protected>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
        <h1>Create New Post</h1>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
          />

          <textarea
            placeholder="Write your post..."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            style={{
              padding: 8,
              border: "1px solid #ccc",
              borderRadius: 4,
              minHeight: 200,
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 16px",
              background: "#333",
              color: "#fff",
              borderRadius: 4,
              border: "none",
            }}
          >
            Publish
          </button>
        </form>
      </div>
    </Protected>
  );
}
