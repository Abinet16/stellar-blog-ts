"use client";

import { useEffect, useState } from "react";
import {
  fetchUsers,
  updateUserRole,
  banUser,
  unbanUser,
  UserListResponse,
} from "../../../lib/adminApi";
import { UserRole } from "../../../lib/types";

export default function AdminUsersPage() {
  const [data, setData] = useState<UserListResponse | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const res = await fetchUsers({ page, limit: 10, search });
      setData(res);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [page]);

  async function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPage(1);
    await load();
  }

  async function handleRoleChange(id: string, role: UserRole) {
    setActionLoadingId(id);
    try {
      await updateUserRole(id, role);
      await load();
    } finally {
      setActionLoadingId(null);
    }
  }

  async function handleBanToggle(id: string, isBanned: boolean) {
    setActionLoadingId(id);
    try {
      if (isBanned) {
        await unbanUser(id);
      } else {
        await banUser(id);
      }
      await load();
    } finally {
      setActionLoadingId(null);
    }
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Users</h2>
        <form onSubmit={handleSearchSubmit} style={{ display: "flex", gap: 8 }}>
          <input
            placeholder="Search name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ padding: "6px 12px" }}>
            Search
          </button>
        </form>
      </header>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Joined</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} style={{ padding: 12, textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            )}

            {!loading && data?.users.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: 12, textAlign: "center" }}>
                  No users found.
                </td>
              </tr>
            )}

            {!loading &&
              data?.users.map((user) => (
                <tr key={user._id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value as UserRole)
                      }
                      disabled={actionLoadingId === user._id}
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </Td>
                  <Td>{user.isBanned ? "Banned" : "Active"}</Td>
                  <Td>{new Date(user.createdAt).toLocaleDateString()}</Td>
                  <Td>
                    <button
                      onClick={() => handleBanToggle(user._id, user.isBanned)}
                      disabled={actionLoadingId === user._id}
                      style={{
                        padding: "4px 8px",
                        background: user.isBanned ? "#4caf50" : "#f44336",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                    >
                      {user.isBanned ? "Unban" : "Ban"}
                    </button>
                  </Td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {data && data.pages > 1 && (
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <span>
            Page {data.page} of {data.pages}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>
            <button
              disabled={page >= data.pages}
              onClick={() => setPage((p) => Math.min(data.pages, p + 1))}
            >
              Next
            </button>
          </div>
        </footer>
      )}
    </div>
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
