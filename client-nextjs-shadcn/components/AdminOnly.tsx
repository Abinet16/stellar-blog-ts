"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/auth-provider";

export default function AdminOnly({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/login");
      } else if (user.role !== "admin") {
        router.push("/not-authorized");
      }
    }
  }, [loading, user, router]);

  if (loading || !user || user.role !== "admin") return null;

  return <>{children}</>;
}
