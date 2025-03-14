import { useState } from "react";
import { Physicians } from "../../../database/Physicians/Physicians";
import { usePhysiciansPageContext } from "../context";
import { TrialMatches } from "./TrialMatches";

export const ResultsList = () => {
  const { pageState, setPageState } = usePhysiciansPageContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [physiciansPerPage, setPhysiciansPerPage] = useState(5);
  const totalPages = Math.ceil(Physicians.length / physiciansPerPage);

  return (
    <div className="flex w-full h-[100%]">
      <div className="flex flex-col w-1/4 h-full bg-white border-r border-gray-200 p-4 gap-4">
        <h2 className="font-semibold text-lg">Select Physician</h2>
        <div className="flex flex-col gap-4 overflow-y-auto h-full">
          {Physicians.slice(
            (currentPage - 1) * physiciansPerPage,
            currentPage * physiciansPerPage
          ).map((physician, i) => (
            <button
              onClick={() => {
                setPageState((prev) => ({
                  ...prev,
                  selectedPhysician: physician,
                  matchedTrials: null,
                }));
              }}
              key={i}
              className={`flex min-h-40 w-full p-3 text-left rounded-lg ${
                pageState.selectedPhysician?.npiNumber === physician.npiNumber
                  ? "bg-blue-200"
                  : "bg-slate-100"
              } text-blue-700 font-medium hover:bg-blue-100 overflow-y-auto`}
            >
              <div className="flex flex-col gap-2 w-full">
                <div className="text-sm font-semibold">
                  {physician.firstName} {physician.lastName}
                </div>
                <div className="text-xs">
                  Specialty: {physician.primarySpecialty}
                </div>
                <div className="text-xs">
                  Interest: {physician.firstResearchInterest}
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Pagination controls - same as in Trials */}
        <div className="flex w-full justify-center items-center mt-2 space-x-2 text-xs">
          <select
            className="px-1 py-0.5 w-1/5 rounded border border-gray-200 text-gray-600"
            value={physiciansPerPage}
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
              const pageNum = currentPage <= 5 ? i + 1 : currentPage + i - 2;
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
            {totalPages > physiciansPerPage && currentPage < totalPages - 2 && (
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
      <div className="flex w-full h-full">
        <TrialMatches />
      </div>
    </div>
  );
};
