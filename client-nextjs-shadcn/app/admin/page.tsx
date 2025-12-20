import { fetchAdminStats } from "../../lib/adminApi";

export default async function AdminDashboardPage() {
  const stats = await fetchAdminStats();

  return (
    <div style={{ display: "grid", gap: 24 }}>
      {/* Stats cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        <StatCard label="Total Users" value={stats.totalUsers} />
        <StatCard label="Admins" value={stats.adminCount} />
        <StatCard label="Banned Users" value={stats.bannedCount} />
        <StatCard label="Total Posts" value={stats.totalPosts} />
        <StatCard label="Total Comments" value={stats.totalComments} />
      </section>

      {/* Top authors */}
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
          Top Authors
        </h2>
        <div style={{ border: "1px solid #ddd", borderRadius: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Posts</Th>
              </tr>
            </thead>
            <tbody>
              {stats.topAuthors?.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: 12, textAlign: "center" }}>
                    No authors yet.
                  </td>
                </tr>
              )}
              {stats.topAuthors?.map((author) => (
                <tr key={author.authorId}>
                  <Td>{author.authorName}</Td>
                  <Td>{author.authorEmail}</Td>
                  <Td>{author.postCount}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent users */}
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
          Recent Users
        </h2>
        <div style={{ border: "1px solid #ddd", borderRadius: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th>Joined</Th>
              </tr>
            </thead>
            <tbody>
              {stats.recentUsers?.map((user) => (
                <tr key={user._id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>{user.isBanned ? "Banned" : "Active"}</Td>
                  <Td>{new Date(user.createdAt).toLocaleDateString()}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 8,
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <span style={{ fontSize: 12, color: "#666" }}>{label}</span>
      <span style={{ fontSize: 24, fontWeight: 700 }}>{value}</span>
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
