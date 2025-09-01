"use client";

import { motion } from "framer-motion";
import { Eye, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ErgonomicOptimizationContainer() {
  const [isLoad, setIsload] = useState<boolean>(false);
  return (
    <div className="group w-[450px] h-[630px] pb-5 overflow-hidden flex flex-col shadow-md rounded-lg dark:shadow-[#ffffff19] shadow-[#00000025] transition-all duration-500 hover:scale-[1.03] gap-y-5 border-slate-300 dark:border-slate-700 hover:border-pink-600 dark:hover:border-pink-500 border-[1px] cursor-poiner">
      <div className="relative w-full h-[500px] overflow-hidden rounded-t-lg">
        <div className="w-full h-[350px] relative">
          <Image
            onLoad={() => setIsload(true)}
            unoptimized
            alt="video_poster"
            src={
              "https://cloudblogs.microsoft.com/wp-content/uploads/2018/04/Millenials-13-cropped.png"
            }
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
            {"Advance"}
          </div>
          <div className="bg-white text-black rounded-md p-2 text-sm">
            {"30 min setup"}
          </div>
        </div>
      </div>
      <section className="mx-5 flex flex-col gap-y-5 justify-between h-full">
        <section className="flex flex-col gap-y-8">
          <div className="transition-all duration-200 flex flex-row items-center gap-x-2 font-[600] text-[23px] group-hover:text-pink-600 text-pink-900 dark:text-white">
            <div className="group-hover:scale-[1.05] transition-all duration-200 p-3 rounded-xl bg-pink-200 dark:bg-slate-200 dark:text-black text-pink-800">
              <Eye size={25} />
            </div>
            Quantum Desk Optimization
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-[400] text-lg">
            AI-powered workspace configuration that adapts to your unique
            biomechanics in real-time
          </p>
          <section className="transition-all duration-500 flex flex-col gap-y-2">
            {["Neural monitor positioning", "Biometric chair adjustment"].map(
              (tile, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-x-2 text-pink-700 dark:text-pink-300 font-[500] text-sm"
                  >
                    <div className="rounded-full bg-pink-600 dark:bg-pink-500 w-3 h-3"></div>
                    <h5>{tile}</h5>
                  </div>
                );
              }
            )}
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
    </div>
  );
}
