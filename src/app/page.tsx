import ErgonomicOptimization from "@/components/main/ErgonomicOptimization/ErgonomicOptimization";
import HeroSection from "@/components/main/Hero/HeroSection";
import Intelligence from "@/components/main/Intelligence/page";
import VideoLibrary from "@/components/main/VideoLibrary/VideoLibrary";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <VideoLibrary />
      <Intelligence />
      <ErgonomicOptimization />
    </div>
  );
}
