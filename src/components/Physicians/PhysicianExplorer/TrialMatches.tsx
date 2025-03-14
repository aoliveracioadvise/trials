import { useEffect } from "react";
import { usePhysiciansPageContext } from "../context";
import { Trials } from "../../../database/Trials/Trials";

export const TrialMatches = () => {
  const { pageState, setPageState } = usePhysiciansPageContext();

  useEffect(() => {
    if (pageState.selectedPhysician !== null) {
      setPageState((prev) => ({
        ...prev,
        loadingTrials: true,
        matchedTrials: null,
      }));

      // Fetch matching trials for selected physician
      const fetchTrials = async () => {
        try {
          const _res = await fetch(
            `http://127.0.0.1:8000/physician/${pageState.selectedPhysician?.npiNumber}/trials`
          );
          const res = await _res.json();
          console.log(res);
          if (res.trials.matches) {
            setPageState((prev) => ({
              ...prev,
              matchedTrials: res.trials.matches.map(
                (item: {
                  id: string;
                  confidence: string;
                  matching_summary: string;
                }) => ({
                  id: item.id,
                  trialId: item.id,
                  matchScore: item.confidence,
                  matching_summary: item.matching_summary,
                })
              ),
              loadingTrials: false,
            }));
          }
        } catch (err) {
          console.log(err);
          setPageState((prev) => ({
            ...prev,
            loadingTrials: false,
          }));
        }
      };

      fetchTrials();
    }
  }, [pageState.selectedPhysician]);
  if (!pageState.selectedPhysician) {
    return (
      <div className="flex w-full h-full items-center justify-center text-gray-500">
        Select a physician to view matching trials
      </div>
    );
  }

  if (pageState.loadingTrials) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700" />
      </div>
    );
  }

  if (!pageState.matchedTrials || pageState.matchedTrials.length === 0) {
    return (
      <div className="flex w-full h-full items-center justify-center text-gray-500">
        No matching trials found
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full p-4 gap-4 overflow-y-auto">
      <h2 className="font-semibold text-lg">
        Matching Trials for {pageState.selectedPhysician.firstName}{" "}
        {pageState.selectedPhysician.lastName}
      </h2>
      {pageState.matchedTrials.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-gray-500">
          <p className="text-lg">No matching trials found for this physician</p>
          <p className="text-sm">
            Try selecting a different physician or check back later
          </p>
        </div>
      )}
      {pageState.matchedTrials.length > 0 &&
        pageState.matchedTrials.map((trial, index) => {
          // Get the trial details from the trialId
          const trialDetails = Trials.find(
            (t) => t["NCT Number"] === trial.id.slice(0, -2)
          );

          return (
            <div
              key={index}
              className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow"
            >
              <div className="text-lg font-medium text-blue-700">
                {trialDetails?.["Study Title"]}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">NCT Number:</span>{" "}
                {trialDetails?.["NCT Number"]}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Phase:</span>{" "}
                {trialDetails?.["Phases"]}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Sponsor:</span>{" "}
                {trialDetails?.["Sponsor"]}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Locations:</span>{" "}
                {trialDetails?.["Locations"] || "Not specified"}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Match Score:</span>{" "}
                {Math.round(parseFloat(trial.matchScore) * 100)}%
              </div>
            </div>
          );
        })}
    </div>
  );
};
