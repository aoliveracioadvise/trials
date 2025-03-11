import React from "react";
interface TrialCardProps {
  title: string;
  phase: string;
  sponsor: string;
  criteria: string;
  matchScore?: number;
}
export const TrialCard = ({
  title,
  phase,
  sponsor,
  criteria,
  matchScore
}: TrialCardProps) => {
  return <div className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500">Phase:</span>
              <span className="text-sm text-gray-900">{phase}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500">
                Sponsor:
              </span>
              <span className="text-sm text-gray-900">{sponsor}</span>
            </div>
            <div className="mt-2">
              <span className="text-sm font-medium text-gray-500">
                Key Inclusion Criteria:
              </span>
              <p className="text-sm text-gray-700 mt-1">{criteria}</p>
            </div>
          </div>
        </div>
        {matchScore !== undefined && <div className="ml-4">
            <div className="w-12 h-12 rounded-full border-4 border-blue-200 flex items-center justify-center">
              <span className="text-blue-600 font-medium">{matchScore}%</span>
            </div>
          </div>}
      </div>
    </div>;
};