import React from "react";
import { MapPin, Send } from "lucide-react";
interface PhysicianCardProps {
  name: string;
  specialty: string;
  affiliation: string;
  location: string;
  matchScore: number;
}
export const PhysicianCard = ({
  name,
  specialty,
  affiliation,
  location,
  matchScore
}: PhysicianCardProps) => {
  return <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{specialty}</p>
        </div>
        <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
          <span className="text-blue-700 font-semibold">
            {matchScore}% Match
          </span>
        </div>
      </div>
      <p className="text-gray-700 mb-2">{affiliation}</p>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="h-4 w-4 mr-1" />
        <span>{location}</span>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        <Send className="h-4 w-4" />
        Invite to Trial
      </button>
    </div>;
};