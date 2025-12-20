"use client";

import Link from "next/link";
import { useTheme } from "../app/theme-provider";
import { useAuth } from "../app/auth-provider";
import { logout } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/auth/login");
  }

  return (
    <nav
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--nav-bg, #fff)",
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 18 }}>
          AbenetBlog
        </Link>

        <Link href="/posts">Posts</Link>

        {user && <Link href="/posts/new">New Post</Link>}

        {user?.role === "admin" && (
          <>
            <Link href="/admin">Admin</Link>
            <Link href="/admin/users">Users</Link>
            <Link href="/admin/posts">Posts</Link>
            <Link href="/admin/comments">Comments</Link>
          </>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {!user && (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}

        {user && (
          <>
            <span style={{ fontSize: 14, color: "#555" }}>{user.email}</span>
            <button
              onClick={handleLogout}
              style={{
                padding: "6px 12px",
                background: "#333",
                color: "#fff",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
