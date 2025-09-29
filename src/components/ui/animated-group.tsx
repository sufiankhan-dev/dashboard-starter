"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGroupProps {
  children: ReactNode;
  variants?: any;
  className?: string;
}

export function AnimatedGroup({
  children,
  variants,
  className,
}: AnimatedGroupProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}
