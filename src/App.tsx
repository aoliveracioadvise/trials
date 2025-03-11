import { AppContextProvider } from "./components/Core/AppContext";
import { MainAppPage } from "./pages/MainAppPage";
export function App() {
  return (
    <AppContextProvider>
      <MainAppPage />
    </AppContextProvider>
  );
}
