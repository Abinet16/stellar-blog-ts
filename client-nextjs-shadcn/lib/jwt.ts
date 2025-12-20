import { JwtUser } from "./types";

interface JwtPayload extends JwtUser {
  iat?: number;
  exp?: number;
}

export function decodeJwt(token: string | null): JwtPayload | null {
  if (!token) return null;

  try {
    const [, payload] = token.split(".");
    return JSON.parse(atob(payload)) as JwtPayload;
  } catch {
    return null;
  }
}

export function getCurrentUser(): JwtUser | null {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const payload = decodeJwt(token);
  if (!payload) return null;

  return {
    id: payload.id,
    email: payload.email,
    role: payload.role,
  };
}
