import { LoginForm } from "@/features/auth/components/login-form";

export default async function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </div>
  );
}
