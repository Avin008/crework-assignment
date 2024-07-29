"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const authStatus = useAuthStore((store) => store.authStatus);

  if (authStatus) {
    router.push("/dashboard");
  } else {
    router.push("/login");
  }
  return null;
}
