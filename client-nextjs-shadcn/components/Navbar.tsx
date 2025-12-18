"use client";

import Link from "next/link";
import { useTheme } from "../app/theme-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
      <Link href="/">Home</Link> | <Link href="/posts">Posts</Link> |{" "}
      <Link href="/posts/new">New Post</Link> |{" "}
      <Link href="/auth/login">Login</Link> |{" "}
      <Link href="/auth/register">Register</Link>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
