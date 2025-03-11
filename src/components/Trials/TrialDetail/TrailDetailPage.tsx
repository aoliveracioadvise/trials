import { AIInsights } from "./AIInsights";
import { EligibilitySection } from "./EligibilitySection";
import { OverviewSection } from "./OverviewSection";
import { RightPanel } from "./RightPanel";
import { SitesSection } from "./SitesSection";
import { TrialHeader } from "./TrialHeader";

export const TrialDetailPage = () => {
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
