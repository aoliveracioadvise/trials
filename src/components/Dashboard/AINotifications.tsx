import React from "react";
import { BrainCircuit } from "lucide-react";
const notifications = [{
  id: 1,
  message: "3 new trials match your specialty",
  type: "match"
}, {
  id: 2,
  message: "Enrollment target reached for Trial XYZ",
  type: "milestone"
}, {
  id: 3,
  message: "New site activation pending for Trial ABC",
  type: "action"
}];
export const AINotifications = () => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <BrainCircuit className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">
            AI Notifications
          </h2>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {notifications.map(notification => <div key={notification.id} className="flex items-start p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-700">{notification.message}</p>
            </div>)}
        </div>
      </div>
    </div>;
};