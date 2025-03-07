import React from "react";
import { TrialCard } from "../components/Dashboard/TrialCard";
import { AINotifications } from "../components/Dashboard/AINotifications";
import { EnrollmentChart } from "../components/Dashboard/EnrollmentChart";
import { PhysicianReferrals } from "../components/Dashboard/PhysicianReferrals";
const mockTrials = [{
  id: 1,
  title: "Advanced Diabetes Treatment Study",
  phase: "III",
  sponsor: "PharmaCorp",
  status: "Recruiting",
  enrollmentTarget: 100,
  currentEnrollment: 45
}, {
  id: 2,
  title: "Cardiovascular Prevention Trial",
  phase: "II",
  sponsor: "BioTech Inc",
  status: "Active",
  enrollmentTarget: 75,
  currentEnrollment: 30
}, {
  id: 3,
  title: "Alzheimer's Early Detection Study",
  phase: "IV",
  sponsor: "NeuroHealth",
  status: "Recruiting",
  enrollmentTarget: 150,
  currentEnrollment: 89
}];
export const Dashboard = () => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Open Trials
            </h2>
            <div className="space-y-4">
              {mockTrials.map(trial => <TrialCard key={trial.id} {...trial} />)}
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
    </div>;
};