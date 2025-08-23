"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        
      </motion.div>
    </div>
  );
}
