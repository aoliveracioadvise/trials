import { Bell, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Core/AppContext";
export const Header = () => {
  const { setPageState } = useAppContext();
  return (
    <header className="h-full w-full bg-white border-b border-gray-200">
      <div className="h-full w-full mx-auto px-4">
        <div className="flex h-full justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-blue-600">
              Clinical Trial Management Platform
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/trials" className="text-gray-700 hover:text-blue-600">
              Trials
            </Link>
            <Link
              to="/physicians"
              className="text-gray-700 hover:text-blue-600"
            >
              Physicians
            </Link>
            <Link to="/analytics" className="text-gray-700 hover:text-blue-600">
              Analytics
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <Bell size={20} />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <Settings size={20} />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <User size={20} />
              </button>
              <button
                className="text-gray-600 hover:text-blue-600"
                onClick={() => {
                  setPageState((prev) => ({ ...prev, isAuthenticated: false }));
                  localStorage.setItem("isAuthenticated", "FALSE");
                }}
              >
                <LogOut size={20} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
