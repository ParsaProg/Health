"use client";

import type { VideoLibrary } from "@/interfaces/videoLibrary";
import { Eye, Play, Star, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VideoLibraryContainer({
  category,
  level,
  title,
  description,
  minuteTime,
  starCount,
  posterImage,
}: VideoLibrary) {
  const [isLoad, setIsload] = useState<boolean>(false);

  return (
    <div className="group hover:scale-[1.03] transition-all duration-500 cursor-pointer dark:bg-slate-900 bg-white rounded-lg shadow-md dark:shadow-[#ffffff15] shadow-[#0000001a] w-[520px] h-[500px] border-[1px] dark:border-slate-600 border-slate-300 flex flex-col items-start justify-center gap-y-3">
      <div className="relative w-full h-[280px] overflow-hidden rounded-t-lg">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center text-black z-[999]">
          <div className="opacity-0 group-hover:opacity-[1] transition-all duration-500 text-white rounded-full p-5 bg-primary">
            <Play size={40} />
          </div>
        </div>
        <div className="w-full h-[280px] z-[10] relative">
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
        <div className="absolute w-full top-3 flex px-3 items-center justify-between z-[20]">
          <div className="bg-primary text-white rounded-md p-2 text-sm">
            {category}
          </div>
          <div className="bg-white text-black rounded-md p-2 text-sm">
            {level}
          </div>
        </div>
      </div>
      <div className="m-5 flex flex-col items-start gap-5">
        <section className="dark:text-red-400 text-primary flex items-center gap-x-2 font-[400] text-md">
          <Target />
          {category}
        </section>
        <div>
          <h1 className="dark:text-red-500 text-red-900 font-[500] text-2xl">{title}</h1>
          <p className="dark:text-slate-400 text-slate-500 font-[400] text-lg mt-1">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-x-2 dark:text-slate-400 text-slate-500">
            {minuteTime} min
            <div className="flex items-center gap-x-1">
              {[1, 2, 3, 4, 5].map((v, _i) => {
                return (
                  <Star
                    key={_i}
                    stroke="#E934BE"
                    size={15}
                    fill={v - Number(starCount) - 1 < 0 ? "#E934BE" : "white"}
                  />
                );
              })}
            </div>
          </div>

          <button className="p-3 rounded-lg border-none bg-primary hover:bg-purple-800 text-white font-bold flex items-center gap-x-2 justify-center transition-all duation-500">
            Watch
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
