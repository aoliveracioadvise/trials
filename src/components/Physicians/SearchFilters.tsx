import React from "react";
import { Search, MapPin } from "lucide-react";
export const SearchFilters = () => {
  return <div className="bg-white p-6 border-b border-gray-200">
      <div className="grid grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input type="text" placeholder="Search physicians..." className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <select className="w-full p-2.5 border border-gray-300 rounded-lg">
            <option value="">All Specialties</option>
            <option value="cardiology">Cardiology</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="oncology">Oncology</option>
          </select>
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input type="text" placeholder="Location" className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <select className="w-full p-2.5 border border-gray-300 rounded-lg">
            <option value="">Trial Experience</option>
            <option value="1-5">1-5 trials</option>
            <option value="6-10">6-10 trials</option>
            <option value="10+">10+ trials</option>
          </select>
        </div>
      </div>
    </div>;
};