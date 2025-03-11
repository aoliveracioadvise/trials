import { TrialsPageContextProvider } from "../components/Trials/context";
import { TrialExplorerPage } from "../components/Trials/TrialExplorer/TrailExplorerPage";

export const Trials = () => {
  return (
    <TrialsPageContextProvider>
      <TrialExplorerPage />
    </TrialsPageContextProvider>
  );
};
