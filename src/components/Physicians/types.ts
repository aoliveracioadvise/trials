import { PhysicianType } from "../../database/Physicians/types";

export type PhysicianStateType = {
  allPhysicians: PhysicianType[];
  selectedPhysician: PhysicianType | null;
  filters: {
    npiNumber: string | null;
    primarySpecialty: string | null;
    state: string | null;
    city: string | null;
  };
  search: boolean;
  loading: boolean;
  loadingTrials: boolean;
  loadingPhysicians: boolean;
  matchedTrials: Array<{
    id: string;
    trialId: string;
    matchScore: string;
  }> | null;
};
