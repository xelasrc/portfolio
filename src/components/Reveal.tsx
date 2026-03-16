"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}