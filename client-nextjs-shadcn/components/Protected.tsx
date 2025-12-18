"use client";

import { useEffect, useState } from "react";
import { getToken } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.push("/auth/login");
    } else {
      setAllowed(true);
    }
  }, [router]);

  if (!allowed) return null;

  return children;
}
