import { Filter } from "lucide-react";
import { Trials } from "../../../database/Trials/Trials";
export const SearchBar = () => {
  const PhasesData = [
    ...new Set(
      Trials.filter((trial) => trial["Phases"] !== undefined)
        .map((trial) =>
          trial["Phases"]
            ?.split(",")
            .filter((item) => item !== "" && item !== "NA")
        )
        .filter((item) => item && item.length > 0)
        .flat()
    ),
  ];

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

  return (
    <div className="h-[10%] w-full bg-white shadow-sm border-b">
      <div className="w-full mx-auto p-4">
        <div className="flex flex-wrap gap-4 items-end">
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
                console.log(e.target.value);
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
              Phase
            </label>
            <select
              id="search-field"
              className="w-full p-2 border rounded-md bg-white hover:bg-gray-50"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              {PhasesData.map((item, i) => (
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
              Location
            </label>
            <select
              id="search-field"
              className="w-full p-2 border rounded-md bg-white hover:bg-gray-50"
              onChange={(e) => {
                console.log(e.target.value);
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
                console.log(e.target.value);
              }}
            >
              {SponsorData.slice(0, 200).map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button className="h-fit bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};
