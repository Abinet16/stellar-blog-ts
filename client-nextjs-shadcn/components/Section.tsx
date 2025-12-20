export default function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <section style={{ marginTop: 40 }}>
      {title && (
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
