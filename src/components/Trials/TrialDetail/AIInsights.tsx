import { Sparkles } from "lucide-react";
export const AIInsights = () => {
  return (
    <section className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-blue-600" />
        <h2 className="text-xl font-semibold">AI Insights</h2>
      </div>
      <p className="text-gray-600">
        Based on your specialty in oncology and previous trial involvement, this
        study may be relevant for your practice. The novel mechanism of XYZ-789
        shows promising results in early phases, particularly for patients with
        specific genetic markers common in your patient population.
      </p>
    </section>
  );
};
