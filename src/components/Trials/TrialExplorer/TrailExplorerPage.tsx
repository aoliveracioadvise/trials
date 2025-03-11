import { ResultsList } from "./ResultsList";
import { SearchBar } from "./SearchBar";

export const TrialExplorerPage = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 w-full">
      <SearchBar />
      <ResultsList />
    </div>
  );
};
