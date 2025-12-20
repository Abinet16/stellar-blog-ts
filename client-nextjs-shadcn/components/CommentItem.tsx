export default function CommentItem({
  user,
  text,
  date,
}: {
  user: string;
  text: string;
  date: string;
}) {
  return (
    <div
      style={{
        padding: 12,
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <strong style={{ fontSize: 14 }}>{user}</strong>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>{text}</p>
      <span style={{ fontSize: 12, color: "#777" }}>
        {new Date(date).toLocaleString()}
      </span>
    </div>
  );
}
