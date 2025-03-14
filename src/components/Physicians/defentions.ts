import { PhysicianStateType } from "./types";

export const Default_PhysicianState: PhysicianStateType = {
  allPhysicians: [],
  selectedPhysician: null,
  filters: {
    npiNumber: null,
    primarySpecialty: null,
    state: null,
    city: null,
  },
  search: false,
  loading: false,
  loadingTrials: false,
  loadingPhysicians: false,
  matchedTrials: null,
};
