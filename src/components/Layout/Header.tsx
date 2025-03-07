import React from "react";
import { Bell, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
export const Header = () => {
  return <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
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
            <Link to="/physicians" className="text-gray-700 hover:text-blue-600">
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
            </div>
          </nav>
        </div>
      </div>
    </header>;
};