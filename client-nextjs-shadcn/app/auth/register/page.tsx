"use client";

import { useState } from "react";
import { apiPost } from "../../../lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res:any = await apiPost("/auth/register", form);
      if (res.user || res.token) {
        router.push("/auth/login");
      }
    } catch {
      setError("Registration failed");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
        Register
      </h1>

      {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
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
          Register
        </button>
      </form>
    </div>
  );
}
