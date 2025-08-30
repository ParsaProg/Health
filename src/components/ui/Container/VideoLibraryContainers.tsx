"use client"

import Image from "next/image";
import { useState } from "react";

export default function VideoLibraryContainer() {
  const [isLoad, setIsload] = useState<boolean>(false);
  return (
    <div className="bg-white rounded-lg shadow-md shadow-[#0000001a] w-[500px] h-[500px] border-[1px] border-slate-300 flex flex-col items-start gap-y-3">
      <div className="relative w-full h-[280px] overflow-hidden rounded-t-lg">
        <div className="w-full h-[280px]">
          <Image
            onLoad={() => setIsload(true)}
            unoptimized
            alt="video_poster"
            src={
              "https://blog.weberknapp.com/hs-fs/hubfs/iStock-1255081458.jpg?width=460&height=307&name=iStock-1255081458.jpg"
            }
            fill
            className={`${isLoad? "scale-[1] blur-0 grayscale-0": "grayscale scale-[0.9] blur-lg"} transition-all duration-1000`}
          />
        </div>
      </div>
    </div>
  );
}
