"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../../lib/api";
import AdminOnly from "../../../components/AdminOnly";

interface AdminPost {
  _id: string;
  title: string;
  excerpt: string;
  createdAt: string;
  author: {
    name: string;
    email: string;
  };
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const data = await apiGet<AdminPost[]>("/posts");
      setPosts(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <AdminOnly>
      <div style={{ display: "grid", gap: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>All Posts</h2>

        <div style={{ border: "1px solid #ddd", borderRadius: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Excerpt</Th>
                <Th>Created</Th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={4} style={{ padding: 12, textAlign: "center" }}>
                    Loading...
                  </td>
                </tr>
              )}

              {!loading &&
                posts.map((post) => (
                  <tr key={post._id}>
                    <Td>{post.title}</Td>
                    <Td>{post.author?.name}</Td>
                    <Td>{post.excerpt}</Td>
                    <Td>{new Date(post.createdAt).toLocaleDateString()}</Td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminOnly>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: 8,
        borderBottom: "1px solid #eee",
        fontSize: 13,
        color: "#555",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: 8,
        borderBottom: "1px solid #f5f5f5",
        fontSize: 14,
      }}
    >
      {children}
    </td>
  );
}
