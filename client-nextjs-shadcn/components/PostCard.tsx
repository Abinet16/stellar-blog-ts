import Link from "next/link";
import Card from "./Card";

export default function PostCard({
  id,
  title,
  excerpt,
  author,
  date,
}: {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}) {
  return (
    <Card style={{ cursor: "pointer" }}>
      <Link
        href={`/posts/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>{title}</h2>
        <p style={{ marginTop: 8, color: "#555", lineHeight: 1.6 }}>
          {excerpt}
        </p>

        <div style={{ marginTop: 12, fontSize: 14, color: "#777" }}>
          By {author} • {new Date(date).toLocaleDateString()}
        </div>
      </Link>
    </Card>
  );
}
