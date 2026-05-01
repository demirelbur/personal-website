"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ease } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
