import React from "react";
import { UserPlus } from "lucide-react";
const referrals = [{
  id: 1,
  physician: "Dr. Sarah Johnson",
  trial: "Diabetes Type 2 Study",
  status: "Pending"
}, {
  id: 2,
  physician: "Dr. Michael Chen",
  trial: "Cardiovascular Trial",
  status: "Invited"
}];
export const PhysicianReferrals = () => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Physician Referrals
          </h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {referrals.map(referral => <div key={referral.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div>
                <p className="font-medium text-gray-900">
                  {referral.physician}
                </p>
                <p className="text-sm text-gray-600">{referral.trial}</p>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  {referral.status}
                </span>
                <button className="ml-4 text-blue-600 hover:text-blue-700">
                  <UserPlus size={20} />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};