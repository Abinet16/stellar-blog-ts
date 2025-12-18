"use client";

import { getToken } from "@/lib/auth";
import { hasRole } from "@/lib/roles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminOnly({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!hasRole("admin", token)) {
      router.push("/not-authorized");
    }
  }, []);

  return <>{children}</>;
}
