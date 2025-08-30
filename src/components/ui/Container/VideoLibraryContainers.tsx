"use client";

import { Eye, Play, Star, Target } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VideoLibraryContainer() {
  const [isLoad, setIsload] = useState<boolean>(false);
  return (
    <div className="group hover:scale-[1.03] transition-all duration-500 cursor-pointer bg-white rounded-lg shadow-md shadow-[#0000001a] w-[500px] h-[500px] border-[1px] border-slate-300 flex flex-col items-start gap-y-3">
      <div className="relative w-full h-[280px] overflow-hidden rounded-t-lg">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center text-black z-[999]">
          <div className="opacity-0 group-hover:opacity-[1] transition-all duration-500 text-white rounded-full p-5 bg-primary">
            <Play size={40} />
          </div>
        </div>
        <div className="w-full h-[280px] z-[10]">
          <Image
            onLoad={() => setIsload(true)}
            unoptimized
            alt="video_poster"
            src={
              "https://blog.weberknapp.com/hs-fs/hubfs/iStock-1255081458.jpg?width=460&height=307&name=iStock-1255081458.jpg"
            }
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
            Ergonomic
          </div>
          <div className="bg-white text-black rounded-md p-2 text-sm">
            Advanced
          </div>
        </div>
      </div>
      <div className="m-5 flex flex-col items-start gap-5">
        <section className="text-primary flex items-center gap-x-2 font-[400] text-md">
          <Target />
          Ergonomic
        </section>
        <div>
          <h1 className="text-red-900 font-[500] text-2xl">
            Posture Transformation System
          </h1>
          <p className="text-slate-500 font-[400] text-lg mt-1">
            Fix years of damage with this proven correction method
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-x-2 text-slate-500">
            18 min
            <div className="flex items-center gap-x-1">
              {[1, 2, 3, 4, 5].map((v, _i) => {
                return (
                  <Star key={_i} color="#E934BE" size={15} fill="#E934BE" />
                );
              })}
            </div>
          </div>

          <button className="p-3 rounded-lg border-none bg-primary hover:bg-purple-800 text-white font-bold flex items-center gap-x-2 justify-center transition-all duation-500">
            Watch
            <Eye size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
}
