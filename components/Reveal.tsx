"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  yOffset?: number;
  className?: string;
}

export default function Reveal({
  children,
  width = "100%",
  delay = 0,
  yOffset = 40,
  className = "",
}: RevealProps) {
  return (
    <div style={{ position: "relative", width }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
