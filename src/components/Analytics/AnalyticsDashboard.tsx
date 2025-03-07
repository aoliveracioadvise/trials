import React from "react";
import { Calendar, Filter } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
const enrollmentData = [{
  name: "Trial A",
  value: 400
}, {
  name: "Trial B",
  value: 300
}, {
  name: "Trial C",
  value: 200
}, {
  name: "Trial D",
  value: 150
}];
const conversionData = [{
  name: "Converted",
  value: 75
}, {
  name: "Not Converted",
  value: 25
}];
const physicianData = [{
  name: "Dr. Sarah Johnson",
  patients: 45,
  site: "Central Hospital"
}, {
  name: "Dr. Michael Chen",
  patients: 38,
  site: "West Medical Center"
}, {
  name: "Dr. Emily Brown",
  patients: 32,
  site: "East Clinic"
}, {
  name: "Dr. James Wilson",
  patients: 28,
  site: "North Medical"
}];
const trialsData = [{
  trial: "Cardiovascular Study Phase III",
  delay: "15 days",
  action: "Site visit required",
  status: "Critical"
}, {
  trial: "Oncology Trial B",
  delay: "7 days",
  action: "Follow-up call",
  status: "Warning"
}, {
  trial: "Neurology Study A",
  delay: "5 days",
  action: "Documentation review",
  status: "Warning"
}];
const COLORS = ["#0088FE", "#FF8042"];
export const AnalyticsDashboard = () => {
  return <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Analytics Overview
          </h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
              <Calendar size={18} />
              <span>Date Range</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Enrollment by Trial */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium mb-4">Enrollment by Trial</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Referral Conversion Rate */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium mb-4">
              Referral Conversion Rate
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={conversionData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {conversionData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0088FE]" />
                  <span className="text-sm text-gray-600">Converted (75%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF8042]" />
                  <span className="text-sm text-gray-600">
                    Not Converted (25%)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Top Recruiting Physicians */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium mb-4">
              Top Recruiting Physicians
            </h2>
            <div className="space-y-4">
              {physicianData.map((physician, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">
                      {physician.name}
                    </p>
                    <p className="text-sm text-gray-500">{physician.site}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">
                      {physician.patients}
                    </p>
                    <p className="text-sm text-gray-500">patients</p>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Trials Behind Schedule */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium mb-4">Trials Behind Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium text-gray-600">
                      Trial
                    </th>
                    <th className="text-left py-2 font-medium text-gray-600">
                      Delay
                    </th>
                    <th className="text-left py-2 font-medium text-gray-600">
                      Next Action
                    </th>
                    <th className="text-left py-2 font-medium text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trialsData.map((trial, index) => <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3 text-gray-800">{trial.trial}</td>
                      <td className="py-3 text-gray-800">{trial.delay}</td>
                      <td className="py-3 text-gray-800">{trial.action}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${trial.status === "Critical" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {trial.status}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>;
};