"use client";

import { Apple, ArrowRight, Calendar, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GlobalIntellignece() {
  const [isLoad, setIsload] = useState<boolean>(false);
  return (
    <div className="group z-10 group hover:scale-[1.03] transition-all duration-500 cursor-pointer dark:bg-slate-900 bg-white rounded-lg shadow-md dark:shadow-[#ffffff15] shadow-[#0000001a] w-[650px] h-[350px] border-[1px] dark:border-slate-800 border-slate-300 flex flex-row items-center justify-start">
      <div className="left-side relative w-[280px] h-full overflow-hidden rounded-l-lg">
        <div className="w-[350px] h-full relative">
          <Image
            onLoad={() => setIsload(true)}
            unoptimized
            alt="video_poster"
            src={
              "https://cdn.mos.cms.futurecdn.net/C2pjtmUhJK5zyUhhBeKfnm-1200-80.jpg"
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
          <div className="bg-pink-500 animate-pulse flex items-center gap-x-2 text-white rounded-md p-2 text-sm">
            <TrendingUp size={15} />
            {"Trending"}
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-y-5 items-start w-full px-5">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center gap-x-2 text-black dark:text-white">
            <Apple size={20} className="dark:text-pink text-pink-600" />

            <h5 className="px-2 py-1 rounded-lg border-[1px] border-slate-400 dark:border-slate-400 text-slate-700 dark:text-slate-300 text-sm">
              Nutrition
            </h5>
          </div>
          <div className="font-[400] text-slate-700 dark:text-slate-400 flex items-center gap-x-1">
            <Calendar size={18} />6 hours ago
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="dark:text-white text-pink-800 text-2xl font-[700] w-full">
            Mediterranean Diet 3.0: The Evolution
          </h1>
          <p className="w-full leading-relaxed dark:text-slate-400 text-slate-500 font-[400]">
            New meta-analysis reveals enhanced Mediterranean diet variations
            that reduce cardiovascular disease risk by 67% and boost longevity
            markers.
          </p>
        </div>
        <button className="hover:bg-pink-500 hover:text-white transition-all duration-500 p-3 rounded-lg text-md text-pink-500 border-none outline-none font-[500] flex items-center justify-center gap-x-2">
          Read Full Analysis
          <ArrowRight size={18} className=" group-hover:ml-1 transition-all duration-300"/>
        </button>
      </section>
    </div>
  );
}
