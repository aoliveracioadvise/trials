import { Trials } from "../../database/Trials/Trials";
import { TrialStateType } from "./types";

export const Default_TrialState: TrialStateType = {
  allTrials: Trials,
  selectedTrial: null,
  filters: {
    trialId: null,
    theraputicArea: "Ovarian Cancer",
    location: null,
    sponsor: null,
  },
  search: false,
  loading: false,
  loadingTrials: false,
  loadingPhysicians: false,
  matchedPhysician: null,
};
