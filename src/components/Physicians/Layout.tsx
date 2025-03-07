import React from "react";
import { Search, MapPin, Award, Send } from "lucide-react";
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex w-full min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
        <h2 className="font-semibold text-lg mb-4">Select Trial</h2>
        <div className="space-y-2">
          <button className="w-full p-3 text-left rounded-lg bg-blue-50 text-blue-700 font-medium">
            Trial A: Diabetes Type 2
          </button>
          <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50">
            Trial B: Cardiovascular
          </button>
          <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50">
            Trial C: Oncology
          </button>
        </div>
      </aside>
      {children}
    </div>;
};