import React from "react";
import { Clock, Users } from "lucide-react";
interface TrialCardProps {
  title: string;
  phase: string;
  sponsor: string;
  status: string;
  enrollmentTarget: number;
  currentEnrollment: number;
}
export const TrialCard = ({
  title,
  phase,
  sponsor,
  status,
  enrollmentTarget,
  currentEnrollment
}: TrialCardProps) => {
  return <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <div className="mt-2 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <div size={16} className="mr-2" />
          <span>Phase {phase}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users size={16} className="mr-2" />
          <span>
            {currentEnrollment}/{enrollmentTarget} enrolled
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-gray-500">{sponsor}</span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            {status}
          </span>
        </div>
      </div>
    </div>;
};