import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="flex bg-custom-gradient min-h-screen items-center justify-center">
      <LoginForm />
    </main>
  );
}
