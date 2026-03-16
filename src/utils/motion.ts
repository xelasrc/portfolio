import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85, 
    filter: "blur(8px)" 
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)" 
  }
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};