import React from "react";
import { Beaker, Building2 } from "lucide-react";
export const TrialHeader = () => {
  return <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Beaker size={16} />
          <span>Phase III</span>
          <span className="mx-2">•</span>
          <Building2 size={16} />
          <span>Sponsored by Novartis Pharmaceuticals</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">
          A Study of Novel Treatment XYZ-789 in Patients with Advanced NSCLC
        </h1>
      </div>
    </header>;
};