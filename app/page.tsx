"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  if (true) {
    router.push("login");
  } else {
    router.push("/dashboard");
  }
  return null;
}