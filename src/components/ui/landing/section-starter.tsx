"use client";

import type { LandingSectionsStarterInterFace } from "@/interfaces/LandingSectionsStarterInterFace";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
export default function LandingSectionsStarter({
  icon,
  iconTitle,
  title,
  subTitle,
  desc,
}: LandingSectionsStarterInterFace) {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="p-4 rounded-lg border-[1px] dark:border-slate-700 text-sm md:text-lg cursor-pointer hover:scale-[1.05] transition-all duration-200 border-slate-300 flex items-center gap-x-2 justify-center"
      >
        {icon}
        {iconTitle}
      </motion.div>
      <section className="flex flex-col items-center">
        <h1 className="text-center sm:text-[50px] text-[30px] font-bold">
          {title}
        </h1>
        <h1 className="sm:mt-[-10px] text-center text-transparent sm:text-[50px] text-[30px] font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text animate-gradient-x bg-[length:200%_200%]">
          {subTitle}
        </h1>
      </section>
      <p className="dark:text-slate-400 text-slate-700 sm:text-xl text-md leading-[30px] text-center [@media(min-width:1000px)]:w-[1000px] font-[400]">
        {desc}
      </p>
    </div>
  );
}
