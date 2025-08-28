"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoLibrary() {
  return (
    <div className="w-[95%] flex flex-col items-center mt-24 gap-y-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="p-4 rounded-lg border-[1px] dark:border-slate-700 text-sm md:text-lg cursor-pointer hover:scale-[1.05] transition-all duration-200 border-slate-300 flex items-center gap-x-2 justify-center"
      >
        <Play size={20} className="animate-rotate" />
        Video Content
      </motion.div>
      <section className="flex flex-col items-center">
        <h1 className="text-center sm:text-[50px] text-[30px] font-bold">Health & Body</h1>
        <h1 className="sm:mt-[-10px] text-center text-transparent sm:text-[50px] text-[30px] font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text animate-gradient-x bg-[length:200%_200%]">
          Video Library
        </h1>
      </section>
      <p className="dark:text-slate-400 text-slate-700 sm:text-xl text-md leading-[30px] text-center [@media(min-width:1000px)]:w-[1000px] font-[400]">
        Expert-curated video content featuring world-renowned health
        professionals and cutting-edge wellness techniques.
      </p>
      
    </div>
  );
}
