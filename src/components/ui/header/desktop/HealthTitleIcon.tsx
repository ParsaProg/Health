import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeaderTitleIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, bottom: -10 }}
      animate={{ opacity: 1, y: 0, bottom: 10 }}
      exit={{
        opacity: 0,
        y: -100,
        bottom: -10,
      }}
      transition={{ delay: 0.7 }}
      className="w-[200px] flex items-center justify-between"
    >
      <section className="relative flex items-center gap-x-2">
        <Heart size={40} className="text-[#B80023] "/>
        <div className="absolute top-1 left-6 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#B80023] to-[#9600b8]">
            Health
          </h1>
          <h1 className="dark:text-slate-300 text-slate-600 text-sm">
            Next-Gen Wellness
          </h1>
        </div>
      </section>
      <section></section>
    </motion.div>
  );
}
