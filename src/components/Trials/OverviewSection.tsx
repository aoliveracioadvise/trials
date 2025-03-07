import React from "react";
import { Calendar } from "lucide-react";
export const OverviewSection = () => {
  return <section className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <p className="text-gray-600 mb-6">
        This phase III study evaluates the efficacy and safety of XYZ-789
        compared to standard of care in patients with advanced non-small cell
        lung cancer (NSCLC) who have progressed after first-line therapy.
      </p>
      <div className="flex gap-8">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Calendar size={16} />
            <span>Start Date</span>
          </div>
          <p className="font-medium">January 15, 2024</p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Calendar size={16} />
            <span>End Date</span>
          </div>
          <p className="font-medium">December 31, 2025</p>
        </div>
      </div>
    </section>;
};