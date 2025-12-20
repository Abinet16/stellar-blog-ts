export default function Container({
  children,
  width = 900,
}: {
  children: React.ReactNode;
  width?: number;
}) {
  return (
    <div
      style={{
        maxWidth: width,
        margin: "0 auto",
        padding: "24px 16px",
      }}
    >
      {children}
    </div>
  );
}
