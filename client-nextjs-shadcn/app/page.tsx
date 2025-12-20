export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
        Abenet’s Modern Blog Platform
      </h1>

      <p
        style={{
          fontSize: 18,
          maxWidth: 600,
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        A clean, powerful, full‑stack blogging experience built with Next.js,
        Express, MongoDB, JWT authentication, role‑based access, comments, admin
        dashboard, dark mode, and more.
      </p>

      <div style={{ display: "flex", gap: 16 }}>
        <a
          href="/posts"
          style={{
            padding: "12px 20px",
            background: "#333",
            color: "#fff",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          View Posts
        </a>

        <a
          href="/auth/register"
          style={{
            padding: "12px 20px",
            background: "#555",
            color: "#fff",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
