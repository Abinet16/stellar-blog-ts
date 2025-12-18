import Link from "next/link";
import { Post } from "../lib/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div style={{ padding: 20, border: "1px solid #ccc", marginBottom: 10 }}>
      <h2>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.content.slice(0, 120)}...</p>
    </div>
  );
}
