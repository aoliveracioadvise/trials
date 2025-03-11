import React from "react";
import { Check, X } from "lucide-react";
export const EligibilitySection = () => {
  return <section className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Eligibility Criteria</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <Check className="text-green-600" size={20} />
          Inclusion Criteria
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Age ≥ 18 years</li>
          <li>Histologically confirmed NSCLC</li>
          <li>ECOG performance status 0-1</li>
          <li>Adequate organ function</li>
          <li>Prior first-line therapy completion</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <X className="text-red-600" size={20} />
          Exclusion Criteria
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Active brain metastases</li>
          <li>Prior immunotherapy treatment</li>
          <li>Autoimmune disease</li>
          <li>Concurrent malignancy</li>
        </ul>
      </div>
    </section>;
};