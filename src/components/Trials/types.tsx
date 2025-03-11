import { TrialType } from "../../database/Trials/types";

export type TrialStateType = {
  selectedTrial: TrialType | null;
  filters: null;
  search: boolean;
  loading: boolean;
  loadingTrials: boolean;
};
