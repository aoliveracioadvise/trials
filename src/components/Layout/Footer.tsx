import React from "react";
export const Footer = () => {
  return <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Clinical Trial Management Platform. All
          rights reserved.
        </div>
      </div>
    </footer>;
};