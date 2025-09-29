import { SignUpForm } from "@/features/auth/components/signup-form";

export default async function SignUp() {
  return (
    <div className="bg-background relative flex min-h-screen items-center justify-center p-6">
      <SignUpForm />
    </div>
  );
}
