import { PhysiciansPageContextProvider } from "../components/Physicians/context";
import { PhysicianExplorerPage } from "../components/Physicians/PhysicianExplorer/PhysicianExplorerPage";

export const Physicians = () => {
  return (
    <PhysiciansPageContextProvider>
      <PhysicianExplorerPage />
    </PhysiciansPageContextProvider>
  );
};
