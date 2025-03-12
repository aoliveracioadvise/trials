import { Loader2, Send } from "lucide-react";
import { useTrialsPageContext } from "../context";
import { useEffect, useState } from "react";
import { Physicians } from "../../../database/Physicians/Physicians";

export default function Matching() {
  const { pageState, setPageState } = useTrialsPageContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [physicianPerPage, setPhysiciansPerPage] = useState(5);
  const totalPages = Math.ceil(Physicians.length / physicianPerPage);
  useEffect(() => {
    if (pageState.selectedTrial !== null) {
      setPageState((prev) => ({
        ...prev,
        loadingPhysicians: true,
        matchedPhysician: null,
      }));
      Physicians.forEach(async (physician, i) => {
        try {
          const _res = await fetch(
            `http://127.0.0.1:8000/physician/${physician.id}/trials`
          );
          const res = await _res.json();
          console.log(res);
          const matches = res.trials.matches as Array<{
            id: string;
            confidence: string;
            matching_summary: string;
          }>;
          console.log(
            matches.filter(
              (item) =>
                item.id.slice(0, -2) === pageState.selectedTrial?.["NCT Number"]
            )
          );
          if (
            matches.filter(
              (item) =>
                item.id.slice(0, -2) === pageState.selectedTrial?.["NCT Number"]
            ).length > 0
          ) {
            setPageState((prev) => ({
              ...prev,
              matchedPhysician: prev.matchedPhysician
                ? [
                    ...prev.matchedPhysician,
                    {
                      id: physician.id,
                      matchScore: matches.filter(
                        (item) =>
                          item.id.slice(0, -2) ===
                          pageState.selectedTrial?.["NCT Number"]
                      )[0].confidence as string,
                      trialId: pageState.selectedTrial?.["NCT Number"]!,
                    },
                  ]
                : [
                    {
                      id: physician.id,
                      matchScore: matches.filter(
                        (item) =>
                          item.id.slice(0, -2) ===
                          pageState.selectedTrial?.["NCT Number"]
                      )[0].confidence as string,
                      trialId: pageState.selectedTrial?.["NCT Number"]!,
                    },
                  ],
            }));
          }
        } catch (err) {
          console.log(`res for P001`, err);
        }
        if (Physicians.length === i + 1) {
          setPageState((prev) => ({
            ...prev,
            loadingPhysicians: false,
          }));
        }
      });
    }
  }, [pageState.selectedTrial]);
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <h1 className="text-2xl font-semibold text-gray-900 px-6">Physicians</h1>
      {pageState.selectedTrial !== null ? (
        pageState.loadingPhysicians ? (
          <div className="flex w-full h-full items-center justify-center flex-col gap-4">
            <Loader2 className="h-10 w-10 animate-spin" />
            <p className="text-gray-600">Loading physicians...</p>
          </div>
        ) : pageState.matchedPhysician !== null &&
          pageState.matchedPhysician.length > 0 ? (
          <div className="flex w-full h-full items-between justify-between flex-col gap-4 pb-4">
            <div className="grid grid-cols-3 grid-rows-auto gap-6 p-6 w-full">
              {Physicians.filter((physician) =>
                new Set(
                  pageState.matchedPhysician?.map((item) => item.id)
                )?.has(physician.id)
              ).map((physician) => (
                <div
                  key={physician.id}
                  className="flex flex-col justify-between bg-white h-60 w-full px-6 py-2 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {physician.name}
                      </h3>
                      <p className="text-gray-600">
                        {physician.medical_specialties}
                      </p>
                    </div>
                    <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                      <span className="text-blue-700 font-semibold">
                        {
                          pageState.matchedPhysician?.filter(
                            (item) => item.id === physician.id
                          )[0].matchScore
                        }
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Skills: {physician.technical_skills}
                  </p>
                  <div className="flex gap-4 items-top text-gray-600 mb-4">
                    <span>Interests:</span>
                    <span>{physician.research_interests}</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                    Invite to Trial
                  </button>
                </div>
              ))}
            </div>
            <div className="flex w-1/2 self-center items-center mt-2 space-x-2 text-xs">
              <select
                className="px-1 py-0.5 w-1/5 rounded border border-gray-200 text-gray-600"
                value={physicianPerPage}
                onChange={(e) => {
                  setPhysiciansPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <div className="flex w-3/5 items-center justify-center space-x-1">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum =
                    currentPage <= 5 ? i + 1 : currentPage + i - 2;
                  if (pageNum <= totalPages) {
                    return (
                      <button
                        key={pageNum}
                        className={`px-1.5 py-0.5 rounded ${
                          currentPage === pageNum
                            ? "bg-blue-100"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                  return null;
                })}
                {totalPages > physicianPerPage &&
                  currentPage < totalPages - 2 && (
                    <>
                      <span>...</span>
                      <button
                        className="px-1.5 py-0.5 rounded hover:bg-gray-100"
                        onClick={() => setCurrentPage(totalPages)}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200"
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
              </div>
              <span className="w-1/5 text-gray-500 ml-2">
                {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex w-full h-full items-center justify-center flex-col gap-4">
            <p className="text-gray-600">No physicians</p>
          </div>
        )
      ) : (
        <div className="flex w-full h-full items-center justify-center flex-col gap-4">
          <p className="text-gray-600">No physicians</p>
        </div>
      )}
    </div>
  );
}
