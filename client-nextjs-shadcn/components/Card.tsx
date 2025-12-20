import React from "react";

export default function Card({
  children,
  padding = 20,
  radius = 12,
  shadow = true,
  style = {},
}: {
  children: React.ReactNode;
  padding?: number;
  radius?: number;
  shadow?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        padding,
        borderRadius: radius,
        background: "var(--card-bg, #fff)",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: shadow ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
        transition: "0.2s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
