import { BriefcaseMedical } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface TrialCardProps {
  trialId: string;
  title: string;
  phase: string;
  sponsor: string;
  status: string;
  area: string;
}
export const TrialCard = ({
  trialId,
  title,
  phase,
  sponsor,
  status,
  area,
}: TrialCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-slate-100"
      onClick={() => {
        navigate(`/trials?trialid=${trialId}`);
      }}
    >
      <h3 className="font-medium text-gray-900">{title}</h3>
      <div className="mt-2 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <div className="mr-2" />
          <span>Phase: {phase !== "" ? phase : "NA"}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <BriefcaseMedical size={16} className="mr-2" />
          <span>Area: {area}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-gray-500">{sponsor}</span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};
