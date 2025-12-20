"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../lib/api";
import { Comment } from "../lib/types";
import CommentItem from "./CommentItem";
import Input from "./Input";
import Button from "./Button";

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
    if (!text.trim()) return;

    await apiPost(`/posts/${postId}/comments`, { text });
    setText("");
    load();
  }

  return (
    <div style={{ marginTop: 32 }}>
      <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
        Comments
      </h3>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          overflow: "hidden",
          marginBottom: 16,
        }}
      >
        {comments.length === 0 && (
          <div style={{ padding: 16, color: "#777" }}>No comments yet.</div>
        )}

        {comments.map((c) => (
          <CommentItem
            key={c.id}
            user={c.user}
            text={c.text}
            date={c.createdAt || ""}
          />
        ))}
      </div>

      <form onSubmit={submitComment} style={{ display: "grid", gap: 12 }}>
        <Input
          textarea
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit">Add Comment</Button>
      </form>
    </div>
  );
}
