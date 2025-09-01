import ErgonomicOptimizationContainer from "@/components/ui/Container/ErgonomicOptimizationContainer";
import LandingSectionsStarter from "@/components/ui/landing/section-starter";
import { Target } from "lucide-react";

export default function ErgonomicOptimization() {
  return (
    <div className="flex flex-col items-center mt-24 gap-y-5 overflow-hidden">
      <LandingSectionsStarter
        title="Ergonomic"
        subTitle="Optimization"
        icon={<Target size={18} />}
        iconTitle="Science-Backed Methods"
        desc="Transform your daily habits with precision-engineered ergonomic practices backed by biomechanical research and proven results."
      />
      <div className="flex flex-wrap w-full p-3 justify-center items-center gap-8">
        <ErgonomicOptimizationContainer />
        <ErgonomicOptimizationContainer />
        <ErgonomicOptimizationContainer />
      </div>
    </div>
  );
}
