import React from "react";
import { MapPin } from "lucide-react";
export const SitesSection = () => {
  return <section className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Participating Sites</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Principal Investigator</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {[{
            location: "Mayo Clinic, Rochester, MN",
            pi: "Dr. Sarah Johnson",
            status: "Recruiting"
          }, {
            location: "MD Anderson Cancer Center, Houston, TX",
            pi: "Dr. Michael Chen",
            status: "Recruiting"
          }, {
            location: "Memorial Sloan Kettering, New York, NY",
            pi: "Dr. Robert Williams",
            status: "Not Yet Recruiting"
          }].map((site, index) => <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    {site.location}
                  </div>
                </td>
                <td className="py-3 px-4">{site.pi}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${site.status === "Recruiting" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                    {site.status}
                  </span>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </section>;
};