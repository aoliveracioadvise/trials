import { TrialCard } from "../components/Dashboard/TrialCard";
import { AINotifications } from "../components/Dashboard/AINotifications";
import { EnrollmentChart } from "../components/Dashboard/EnrollmentChart";
import { PhysicianReferrals } from "../components/Dashboard/PhysicianReferrals";
import { Trials } from "../database/Trials/Trials";
import { FSFGS } from "../database/Trials/FSGS";
import { WEIGHT_LOSS } from "../database/Trials/WEIGHT_LOSS";

export const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Open Trials
            </h2>
            <div className="space-y-4">
              {Trials.filter(
                (trial) => trial["NCT Number"] === "NCT06566716"
              ).map((item, i) => (
                <TrialCard
                  key={i}
                  {...{
                    id: i,
                    trialId: item["NCT Number"] as string,
                    title: item["Study Title"] as string,
                    phase: item["Phases"] as string,
                    sponsor: item["Sponsor"] as string,
                    status: item["Study Status"] as string,
                    area: "Overian Cancer",
                  }}
                />
              ))}
              {FSFGS.filter(
                (trial) => trial["NCT Number"] === "NCT05183646"
              ).map((item, i) => (
                <TrialCard
                  key={i}
                  {...{
                    id: i,
                    trialId: item["NCT Number"] as string,
                    title: item["Study Title"] as string,
                    phase: item["Phases"] as string,
                    sponsor: item["Sponsor"] as string,
                    status: item["Study Status"] as string,
                    area: "FSGS",
                  }}
                />
              ))}
              {WEIGHT_LOSS.filter(
                (trial) => trial["NCT Number"] === "NCT05949008"
              ).map((item, i) => (
                <TrialCard
                  key={i}
                  {...{
                    id: i,
                    trialId: item["NCT Number"] as string,
                    title: item["Study Title"] as string,
                    phase: item["Phases"] as string,
                    sponsor: item["Sponsor"] as string,
                    status: item["Study Status"] as string,
                    area: "Weight Loss",
                  }}
                />
              ))}
            </div>
          </section>
          <AINotifications />
        </div>
        {/* Right Column */}
        <div className="space-y-8">
          <EnrollmentChart enrolled={164} target={325} />
          <PhysicianReferrals />
        </div>
      </div>
    </div>
  );
};
