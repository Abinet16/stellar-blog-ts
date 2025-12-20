export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  style = {},
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
}) {
  const colors = {
    primary: { bg: "#111", color: "#fff" },
    secondary: { bg: "#555", color: "#fff" },
    danger: { bg: "#d33", color: "#fff" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 18px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        opacity: disabled ? 0.6 : 1,
        background: colors[variant].bg,
        color: colors[variant].color,
        fontSize: 15,
        transition: "0.2s",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
