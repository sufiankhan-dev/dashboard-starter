"use client";

import React from "react";
import { HeroSection } from "@/components/home-page/hero-section";
import { FeaturesSection, FAQSection, Footer } from "@/components/home-page";

const LandingPage = () => {
  return (
    <div
      className="bg-background text-foreground min-h-screen overflow-x-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <HeroSection />

      <FeaturesSection />

      <FAQSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
