"use client";

import ErgonomicTipsInterFace from "@/interfaces/ergonomicTipsSection";
import { motion } from "framer-motion";
import { Eye, LucideHeartPulse, Moon, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ErgonomicOptimizationContainer({
  category,
  description,
  level,
  posterImage,
  subList,
  title,
  titleTime,
}: ErgonomicTipsInterFace) {
  const [isLoad, setIsload] = useState<boolean>(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0.3, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="cursor-pointer group w-[450px] h-[630px] pb-5 overflow-hidden flex flex-col shadow-md rounded-lg dark:shadow-[#ffffff19] shadow-[#00000025] transition-all duration-500 hover:scale-[1.03] gap-y-5 border-slate-300 dark:border-slate-700 hover:border-pink-600 dark:hover:border-pink-500 border-[1px] dark:bg-slate-900 bg-white cursor-poiner"
    >
      <div className="relative w-full h-[500px] overflow-hidden rounded-t-lg">
        <div className="w-full h-[350px] relative">
          <Image
            onLoad={() => setIsload(true)}
            unoptimized
            alt="video_poster"
            src={posterImage}
            fill
            className={`${
              isLoad
                ? "scale-[1] blur-0 grayscale-0"
                : "grayscale scale-[0.9] blur-lg"
            } transition-all duration-1000`}
          />
        </div>
        <div className="absolute w-full top-3 flex px-3 items-center justify-between">
          <div className="bg-primary text-white rounded-md p-2 text-sm">
            {level}
          </div>
          <div className="bg-white text-black rounded-md p-2 text-sm">
            {titleTime}
          </div>
        </div>
      </div>
      <section className="mx-5 flex flex-col gap-y-5 justify-between h-full">
        <section className="flex flex-col gap-y-8">
          <div className="transition-all duration-200 flex flex-row items-center gap-x-5 font-[600] text-[23px] group-hover:text-pink-600 text-pink-900 dark:text-white">
            <div className="group-hover:scale-[1.05] transition-all duration-200 p-3 rounded-xl bg-pink-200 dark:bg-slate-200 dark:text-black text-pink-800">
              {category === "eye" ? (
                <Eye size={25} />
              ) : category === "sleep" ? (
                <Moon size={25} />
              ) : (
                <LucideHeartPulse size={25} />
              )}
            </div>
            {title}
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-[400] text-lg">
            {description}
          </p>
          <section className="transition-all duration-500 flex flex-col gap-y-2">
            {subList.map((tile, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-x-2 text-pink-700 dark:text-pink-300 font-[500] text-sm"
                >
                  <div className="rounded-full bg-pink-600 dark:bg-pink-500 w-3 h-3"></div>
                  <h5>{tile}</h5>
                </div>
              );
            })}
          </section>
        </section>
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="flex items-center justify-center gap-x-2 border-none outline-none bg-gradient-to-r from-pink-600 to-red-500 w-full text-white rounded-lg py-2"
        >
          <Star size={18} />
          Start Protocol
        </motion.button>
      </section>
    </motion.div>
  );
}
