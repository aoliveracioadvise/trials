export const Footer = () => {
  return (
    <footer className="h-full w-full bg-gray-50 border-t border-gray-200">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Clinical Trial Management Platform. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};
