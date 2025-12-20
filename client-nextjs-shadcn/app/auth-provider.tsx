"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { JwtUser } from "../lib/types";
import { getToken } from "../lib/auth";
import { decodeJwt } from "../lib/jwt";

interface AuthContextType {
  user: JwtUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<JwtUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    const payload = decodeJwt(token);
    if (payload) {
      const { id, email, role } = payload;
      setUser({ id, email, role });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
