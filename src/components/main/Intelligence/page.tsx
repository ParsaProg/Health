import GlobalIntellignece from "@/components/ui/Container/GlobalIntelligenceContainer";
import LandingSectionsStarter from "@/components/ui/landing/section-starter";
import { Globe } from "lucide-react";

export default function Intelligence() {
  return (
    <div className="w-[100%] flex flex-col items-center mt-24 gap-y-5 overflow-hidden">
      <LandingSectionsStarter
        icon={<Globe size={20} />}
        iconTitle="Global Insights"
        title="World Health"
        subTitle="Intelligence"
        desc="Stay ahead with AI-curated health discoveries, breakthrough research, and wellness trends from leading institutions worldwide."
      />
      <div className="grid grid-cols-2 gap-5 mt-5">
        <GlobalIntellignece />
        <GlobalIntellignece />
        <GlobalIntellignece />
        <GlobalIntellignece />
      </div>
    </div>
  );
}
