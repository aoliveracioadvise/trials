import { Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Trials } from "../../../database/Trials/Trials";
import { useTrialsPageContext } from "../context";
import { useEffect } from "react";

export const SearchBar = () => {
  const { pageState, setPageState } = useTrialsPageContext();
  const [searchParams] = useSearchParams();
  const trialId = searchParams.get("trialid");

  const LocationData = [
    ...new Set(
      Trials.filter((trial) => trial["Locations"] !== undefined)
        .map((trial) =>
          trial["Locations"]
            ?.split(",")
            .filter((item) => item !== "" && item !== "NA")
        )
        .filter((item) => item && item.length > 0)
        .flat()
    ),
  ];

  const SponsorData = [
    ...new Set(
      Trials.filter((trial) => trial["Sponsor"] !== undefined)
        .map((trial) =>
          trial["Sponsor"]
            ?.split(",")
            .filter((item) => item !== "" && item !== "NA")
        )
        .filter((item) => item && item.length > 0)
        .flat()
    ),
  ];

  useEffect(() => {
    setPageState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        trialId: trialId ?? "",
      },
      allTrials: Trials.filter((trial) => {
        if (trialId && trialId !== "") {
          if (trial["NCT Number"] === trialId) {
            return true;
          }
          return false;
        } else {
          return true;
        }
      }),
    }));
  }, [trialId]);

  const HandleFilter = () => {
    const filteredTrials = Trials.filter((trial) => {
      // Check each filter condition if it exists
      if (pageState.filters.trialId !== "") {
        if (
          pageState.filters.trialId &&
          trial["NCT Number"] === pageState.filters.trialId
        ) {
          return true;
        }
        return false;
      } else {
        return true;
      }
      // if (
      //   pageState.filters.theraputicArea &&
      //   !trial["Conditions"]
      //     ?.toLowerCase()
      //     .includes(pageState.filters.theraputicArea.toLowerCase())
      // ) {
      //   return false;
      // }
      // if (
      //   pageState.filters.location &&
      //   !trial["Locations"]
      //     ?.toLowerCase()
      //     .includes(pageState.filters.location.toLowerCase())
      // ) {
      //   return false;
      // }
      // if (
      //   pageState.filters.sponsor &&
      //   !trial["Sponsor"]
      //     ?.toLowerCase()
      //     .includes(pageState.filters.sponsor.toLowerCase())
      // ) {
      //   return false;
      // }
    });
    setPageState((prev) => ({
      ...prev,
      allTrials: filteredTrials,
      selectedTrial: null,
    }));
  };
  return (
    <div className="h-[10%] w-full bg-white shadow-sm border-b">
      <div className="w-full mx-auto p-4">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1">
            <label
              htmlFor="search-field"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Trial Id
            </label>
            <input
              value={pageState.filters.trialId ?? ""}
              type="text"
              id="search-field"
              className="w-full p-2 border rounded-md bg-white hover:bg-gray-50"
              placeholder="NCT0000..."
              onChange={(e) => {
                setPageState((prev) => ({
                  ...prev,
                  filters: {
                    ...prev.filters,
                    trialId: e.target.value,
                  },
                }));
              }}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="search-field"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Theraputic Area
            </label>
            <select
              id="search-field"
              className="w-full p-2 border rounded-md bg-white hover:bg-gray-50"
              onChange={(e) => {
                setPageState((prev) => ({
                  ...prev,
                  filters: {
                    ...prev.filters,
                    theraputicArea: e.target.value,
                  },
                }));
              }}
            >
              <option value="Ovarian Cancer">Ovarian Cancer</option>
              <option value="FSGS">FSGS</option>
              <option value="Weight Loss">Weight Loss</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="search-field"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <select
              id="search-field"
              className="w-full p-2 border rounded-md bg-white hover:bg-gray-50"
              onChange={(e) => {
                setPageState((prev) => ({
                  ...prev,
                  filters: {
                    ...prev.filters,
                    location: e.target.value,
                  },
                }));
              }}
            >
              {LocationData.slice(0, 200).map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="search-field"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sponsor
            </label>
            <select
              id="search-field"
              className="w-full p-2 border rounded-md bg-white hover:bg-gray-50"
              onChange={(e) => {
                setPageState((prev) => ({
                  ...prev,
                  filters: {
                    ...prev.filters,
                    sponsor: e.target.value,
                  },
                }));
              }}
            >
              {SponsorData.slice(0, 200).map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button
            className="h-fit bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
            onClick={HandleFilter}
          >
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};
