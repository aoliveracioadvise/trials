import { AIInsights } from "../components/Trials/AIInsights";
import { EligibilitySection } from "../components/Trials/EligibilitySection";
import { OverviewSection } from "../components/Trials/OverviewSection";
import { RightPanel } from "../components/Trials/RightPanel";
import { SitesSection } from "../components/Trials/SitesSection";
import { TrialHeader } from "../components/Trials/TrialHeader";

export const Trials = () => {
  const isPhysician = true; // This would normally come from auth context
  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <div className="flex-1">
        <TrialHeader />
        <main className="max-w-7xl mx-auto py-6 px-6">
          <div className="space-y-6">
            <OverviewSection />
            <EligibilitySection />
            <SitesSection />
            {isPhysician && <AIInsights />}
          </div>
        </main>
      </div>
      <RightPanel />
    </div>
  );
};
