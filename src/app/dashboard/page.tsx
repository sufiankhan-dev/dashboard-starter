"use client";

import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-2">
      <div className="max-w-lg space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Get started by exploring our comprehensive documentation and guides.
          </p>
        </div>
        <Button size="lg" className="gap-2">
          <BookOpen className="h-5 w-5" />
          View Docs
        </Button>
      </div>
    </div>
  );
}
