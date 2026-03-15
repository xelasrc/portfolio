"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-14 max-w-6xl mx-auto -mt-20 pt-20">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.h1
          variants={fadeUp}
          className="font-syne font-extrabold text-bright leading-none tracking-tighter mb-5"
          style={{ fontSize: "clamp(2rem, 9vw, 7.5rem)" }}
        >
          Alexander
          <br />
          <span className="text-accent">Wells.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="font-mono text-muted text-xs md:text-sm tracking-widest mb-8">
          // Software Engineer · Focused on AI & ML
        </motion.p>

        <motion.p variants={fadeUp} className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-12">
          Building AI-driven solutions at the intersection of backend engineering,
          data pipelines, and applied machine learning. Based in NZ, seeking roles
          in Australia.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-6 md:left-14 flex items-center gap-3 text-muted font-mono text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="w-10 h-px bg-muted" />
        Scroll to explore
      </motion.div>
    </section>
  );
}