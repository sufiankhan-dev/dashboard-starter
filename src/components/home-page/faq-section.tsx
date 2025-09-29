"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What technologies are included in this dashboard starter kit?",
    answer:
      "This starter kit includes Next.js 15 with App Router, Better Auth for authentication, shadcn/ui components, Drizzle ORM for database management, dark/light mode theming, and a complete responsive dashboard layout. Everything is pre-configured and ready to use.",
  },
  {
    question: "How do I customize the authentication system?",
    answer:
      "Better Auth is already integrated with email/password authentication and OAuth providers. You can easily add more providers, customize the login/signup forms, and modify user session handling through the provided configuration files.",
  },
  {
    question: "Can I add my own database tables and schemas?",
    answer:
      "Yes! The starter kit uses Drizzle ORM with pre-configured user and company schemas. You can easily add new tables, modify existing schemas, and run migrations. The database connection and ORM setup is already configured.",
  },
  {
    question: "How do I customize the theme and styling?",
    answer:
      "The theme system uses CSS variables and Tailwind CSS. You can customize colors, fonts, and component styles by modifying the theme configuration. Dark/light mode switching is built-in and can be customized through the theme provider.",
  },
  {
    question: "Is this starter kit production-ready?",
    answer:
      "Yes! This starter kit includes production-ready authentication, database setup, responsive design, and follows Next.js best practices. You can deploy it immediately and start building your application features on top of this solid foundation.",
  },
  {
    question: "How do I get started with development?",
    answer:
      "Simply clone the repository, install dependencies with `npm install` or `bun install`, set up your environment variables, run the database migrations, and start the development server. The README includes detailed setup instructions.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Get answers to common questions about the Dashboard Starter Kit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
