"use client";

import { useState } from "react";
import { apiPost } from "../../../lib/api";
import { saveToken } from "../../../lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await apiPost<{ token: string }>("/auth/login", form);
    if (res.token) {
      saveToken(res.token);
      router.push("/posts");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
