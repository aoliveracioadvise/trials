import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
interface EnrollmentChartProps {
  enrolled: number;
  target: number;
}
export const EnrollmentChart = ({
  enrolled,
  target
}: EnrollmentChartProps) => {
  const data = [{
    name: "Enrolled",
    value: enrolled
  }, {
    name: "Remaining",
    value: target - enrolled
  }];
  const COLORS = ["#3B82F6", "#E5E7EB"];
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Enrollment Progress
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {enrolled} of {target} patients enrolled
        </p>
      </div>
    </div>;
};