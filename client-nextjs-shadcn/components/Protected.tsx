"use client";

import { useEffect, useState } from "react";
import { getToken } from "../lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/auth-provider";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = getToken();

    if (!loading) {
      if (!token || !user) {
        router.push("/auth/login");
      } else {
        setAllowed(true);
      }
    }
  }, [loading, user, router]);

  if (!allowed) return null;

  return <>{children}</>;
}
