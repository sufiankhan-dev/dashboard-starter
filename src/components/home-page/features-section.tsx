"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Palette,
  Layout,
  Zap,
  Database,
  Moon,
  Sun,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics?: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Better Auth Integration",
    description:
      "Complete authentication system with email/password, OAuth providers, and session management built-in.",
    metrics: "Ready to use",
  },
  {
    icon: <Palette className="h-8 w-8 text-green-500" />,
    title: "Dark/Light Mode",
    description:
      "Beautiful theme switching with system preference detection and persistent user preferences.",
    metrics: "Auto-detection",
  },
  {
    icon: <Layout className="h-8 w-8 text-yellow-500" />,
    title: "Modern Dashboard Layout",
    description:
      "Responsive sidebar navigation, breadcrumbs, and clean dashboard layout optimized for productivity.",
    metrics: "Mobile-first",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "shadcn/ui Components",
    description:
      "Pre-built, accessible UI components with beautiful styling and consistent design system.",
    metrics: "20+ components",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard Development
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
            A complete starter kit with authentication, modern UI components,
            dark mode, and responsive layouts. Start building your dashboard
            application in minutes, not hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 h-full rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="mb-2 text-xl">
                    {feature.title}
                  </CardTitle>
                  {feature.metrics && (
                    <Badge variant="secondary" className="w-fit">
                      {feature.metrics}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
