import AdminOnly from "../../components/AdminOnly";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminOnly>
      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Admin Dashboard
        </h1>
        {children}
      </div>
    </AdminOnly>
  );
}
