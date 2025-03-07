import React from "react";
import { MessageSquare, UserPlus } from "lucide-react";
export const RightPanel = () => {
  return <div className="bg-white border-l border-gray-200 p-6 w-[320px]">
      <div className="space-y-4">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
          <MessageSquare size={16} />
          Express Interest
        </button>
        <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2">
          <UserPlus size={16} />
          Invite Physician
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Contact Notes</h3>
        <textarea className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none" placeholder="Add your notes here..." />
      </div>
    </div>;
};