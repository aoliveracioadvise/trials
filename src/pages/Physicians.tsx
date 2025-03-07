import { Layout } from "../components/Physicians/Layout";
import { SearchFilters } from "../components/Physicians/SearchFilters";
import { PhysicianCard } from "../components/Physicians/PhysicianCard";
const physicians = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Endocrinology",
    affiliation: "Mayo Clinic",
    location: "Rochester, MN",
    matchScore: 95,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Endocrinology",
    affiliation: "Cleveland Clinic",
    location: "Cleveland, OH",
    matchScore: 88,
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Internal Medicine",
    affiliation: "Massachusetts General Hospital",
    location: "Boston, MA",
    matchScore: 82,
  },
  {
    name: "Dr. James Martinez",
    specialty: "Endocrinology",
    affiliation: "Stanford Medical Center",
    location: "Palo Alto, CA",
    matchScore: 78,
  },
  {
    name: "Dr. Lisa Thompson",
    specialty: "Internal Medicine",
    affiliation: "Johns Hopkins Hospital",
    location: "Baltimore, MD",
    matchScore: 75,
  },
  {
    name: "Dr. Robert Wilson",
    specialty: "Endocrinology",
    affiliation: "UCLA Medical Center",
    location: "Los Angeles, CA",
    matchScore: 72,
  },
];
export function Physicians() {
  return (
    <Layout>
      <main className="flex-1 bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Physician Directory
          </h1>
        </header>
        <SearchFilters />
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {physicians.map((physician, index) => (
              <PhysicianCard key={index} {...physician} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
