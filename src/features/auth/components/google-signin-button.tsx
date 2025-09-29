"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { authClient } from "@/lib/better-auth/auth-client";
import { cn } from "@/lib/utils";

interface GoogleSignInButtonProps {
  className?: string;
}

export function GoogleSignInButton({ className }: GoogleSignInButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      className={cn(
        "flex h-[50px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-[#F4F7FE] px-8 py-3.5 transition-colors hover:bg-[#F4F7FE]/90 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin text-[#19213D]" />
      ) : (
        <>
          <div className="flex h-5 w-5 items-center justify-center rounded-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M19.58 10.21c0-.65-.06-1.28-.17-1.88H10v3.55h5.52c-.24 1.14-.87 2.11-1.84 2.76v2.31h2.98c1.73-1.6 2.92-3.95 2.92-6.74z"
                  fill="#4285F4"
                />
                <path
                  d="M10 20c2.48 0 4.55-.82 6.07-2.22l-2.98-2.31c-.82.55-1.86.88-3.09.88-2.38 0-4.41-1.61-5.13-3.78H1.82v2.37C3.32 17.13 6.48 20 10 20z"
                  fill="#34A853"
                />
                <path
                  d="M4.87 11.91c-.18-.55-.29-1.13-.29-1.74s.11-1.19.29-1.74V5.84H1.82C1.19 7.13.83 8.6.83 10.17s.36 3.04 1 4.33l3.04-2.37-.87-.52z"
                  fill="#FBBC05"
                />
                <path
                  d="M10 4.48c1.35 0 2.55.46 3.51 1.37l2.63-2.63C14.55 1.19 12.48.83 10 .83 6.48.83 3.32 3.7 1.82 6.89l3.05 2.37C5.59 6.09 7.62 4.48 10 4.48z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="text-[14px] leading-5 font-medium tracking-[-0.28px] text-[#19213D]">
            Login via Google
          </span>
        </>
      )}
    </button>
  );
}
