"use client";

import VideoLibraryContainer from "@/components/ui/Container/VideoLibraryContainers";
import LandingSectionsStarter from "@/components/ui/landing/section-starter";
import { FakeVideos } from "@/data/fakeVideos";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoLibrary() {
  return (
    <div className="w-[100%] flex flex-col items-center mt-24 gap-y-5 overflow-hidden">
      <LandingSectionsStarter
        title=" Health & Body"
        subTitle="Video Library"
        desc="Expert-curated video content featuring world-renowned health
        professionals and cutting-edge wellness techniques.Expert-curated video content featuring world-renowned health
        professionals and cutting-edge wellness techniques."
      />
      <div className="flex items-center justify-center gap-10 px-3 xl:px-[100px] xl:flex-nowrap flex-wrap w-full mt-5">
        {FakeVideos.map((video, index) => {
          return <VideoLibraryContainer key={index} {...video} />;
        })}
      </div>
    </div>
  );
}
