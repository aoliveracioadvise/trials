import { TrialType } from "../../database/Trials/types";

export type TrialStateType = {
  allTrials: TrialType[];
  selectedTrial: TrialType | null;
  filters: {
    trialId: string | null;
    theraputicArea: string | null;
    location: string | null;
    sponsor: string | null;
  };
  search: boolean;
  loading: boolean;
  loadingTrials: boolean;
  loadingPhysicians: boolean;
  matchedPhysician: Array<{
    id: string;
    trialId: string;
    matchScore: string;
  }> | null;
};
