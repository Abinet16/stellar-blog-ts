export default function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  textarea = false,
}: {
  label?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      {label && (
        <label style={{ fontSize: 14, fontWeight: 500, color: "#444" }}>
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
            minHeight: 160,
            fontSize: 15,
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 15,
          }}
        />
      )}
    </div>
  );
}
