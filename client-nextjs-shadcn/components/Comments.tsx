"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../lib/api";
import { Comment } from "../lib/types";

export default function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");

  async function load() {
    const data = await apiGet<Comment[]>(`/posts/${postId}/comments`);
    setComments(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function submitComment(e: React.FormEvent) {
    e.preventDefault();
    await apiPost(`/posts/${postId}/comments`, { text });
    setText("");
    load();
  }

  return (
    <div>
      <h3>Comments</h3>

      {comments.map((c) => (
        <div key={c.id}>
          <strong>{c.user}</strong>
          <p>{c.text}</p>
        </div>
      ))}

      <form onSubmit={submitComment}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
