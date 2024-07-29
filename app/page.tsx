"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const authStatus = useAuthStore((store) => store.authStatus);

  useEffect(() => {
    if (authStatus) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [authStatus]);

  return null;
}
