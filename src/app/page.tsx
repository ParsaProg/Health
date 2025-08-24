"use client";

import { motion } from "framer-motion";
import {
  Award,
  CircleStar,
  EthernetPortIcon,
  Power,
  Star,
  Target,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

interface HeroRow {
  icon: any;
  percent: string;
  subTitle: string;
}

const heroIcon = "dark:text-slate-300 text-slate-700 md:w-10 md:h-10 w-7 h-7";

export default function Home() {
  const [heroRow, setHeroRow] = useState<Array<HeroRow>>([
    {
      icon: <UsersRound className={heroIcon} />,
      percent: "2M",
      subTitle: "Active User",
    },
    {
      icon: <Award className={heroIcon} />,
      percent: "95%",
      subTitle: "Success",
    },
    {
      icon: <EthernetPortIcon className={heroIcon} />,
      percent: "150+",
      subTitle: "Countries",
    },
    {
      icon: <Star className={heroIcon} />,
      percent: "4.9",
      subTitle: "Rating",
    },
  ]);
  return (
    <div className="overflow-hidden z-[1] bg-gradient-to-br from-[#0037ff13] to-[#ff00ea0f] dark:from-[#0b1330d6] dark:to-[#20071edf] animate-gradient-x bg-[length:200%_200%]">
      <div className="flex items-center flex-col md:gap-y-8 gap-y-3 w-full md:pt-[100px] pt-[50px] pb-[100px] hero-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="p-5 rounded-lg border-[1px] dark:border-slate-700 text-sm md:text-xl cursor-pointer hover:scale-[1.05] transition-all duration-200 border-slate-300 flex items-center gap-x-2 justify-center"
        >
          <Star className="animate-rotate" />
          World-Class Health Platform
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-transparent p-2 text-[30px] md:text-[70px] font-bold text-center md:leading-[80px] bg-gradient-to-r dark:from-primary dark:to-blue-700 bg-clip-text animate-gradient-x bg-[length:200%_200%]"
        >
          Transform Your Body & Life
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="[@media(min-width:1000px)]:w-[1000px] mb-5 px-5 md:px-0 md:leading-[40px] leading-[30px] text-center md:text-2xl dark:text-slate-400"
        >
          World-Class Health Platform Transform Your Body & Life Experience the{" "}
          future of wellness with AI-powered insights, expert guidance, and{" "}
          revolutionary health practices that transform lives globally.
        </motion.p>
        <div className="flex items-center gap-5 justify-center flex-wrap">
          <motion.button
            initial={{ opacity: 0, scale: 0.9, x: -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
            className="flex items-center gap-x-2 bg-gradient-to-r dark:from-primary dark:to-blue-700 rounded-lg p-5 md:text-xl animate-gradient-x bg-[length:200%_200%]"
          >
            <Power className="md:w-10 md:h-10 w-5 h-5" />
            Start Revolution
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-x-2 border-[1px] dark:border-slate-600 text-slate-300 rounded-lg p-5 md:text-xl "
          >
            <Target className="md:w-10 md:h-10 w-5 h-5" />
            Ergonomic Tips
          </motion.button>
        </div>

        <section className="flex grid-cols-2 items-center gap-x-5 justify-center mt-5">
          {heroRow.map((val, _i) => {
            return (
              <motion.section
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: (_i + 1) * 0.3}}
                className="flex flex-col items-center gap-y-1"
                key={_i}
              >
                <div className="rounded-lg p-3 bg-[#b300ff28] mb-1">
                  {val.icon}
                </div>
                <h1 className="font-bold text-slate-300">{val.percent}</h1>
                <h3 className="font-[500] text-slate-400">{val.subTitle}</h3>
              </motion.section>
            );
          })}
        </section>
      </div>
    </div>
  );
}
