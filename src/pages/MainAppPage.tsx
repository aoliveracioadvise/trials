import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { Dashboard } from "../pages/Dashboard";
import { Trials } from "../pages/Trials";
import { Analytics } from "../pages/Analytics";
import { Physicians } from "../pages/Physicians";
import { useAppContext } from "../components/Core/AppContext";
import { LoginForm } from "../components/Auth/LoginForm";
import { useEffect } from "react";
import { LoaderIcon } from "lucide-react";
export function MainAppPage() {
  const { pageState, setPageState } = useAppContext();
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") !== null) {
      setTimeout(() => {
        setPageState((prev) => ({
          ...prev,
          checkLocalStorage: false,
          isAuthenticated: localStorage.getItem("isAuthenticated") === "TRUE",
        }));
      }, 1200);
    } else {
      setPageState((prev) => ({
        ...prev,
        checkLocalStorage: false,
      }));
    }
  }, [localStorage]);
  if (pageState.checkLocalStorage) {
    return (
      <div>
        <Router>
          <div className="flex justify-center items-center h-screen">
            <LoaderIcon className="animate-spin" size={100} />
          </div>
        </Router>
      </div>
    );
  }
  // For demo purposes, we'll show the dashboard instead of login
  if (!pageState.isAuthenticated) {
    return (
      <Router>
        <div className="min-h-screen bg-gray-50">
          <LoginForm />
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <main className="h-screen w-full flex flex-col overflow-hidden">
        <div className="h-[50px] flex-shrink-0">
          <Header />
        </div>
        <div className="h-[calc(100vh-100px)] overflow-auto box-border">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trials" element={<Trials />} />
            <Route path="/physicians" element={<Physicians />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
        <div className="h-[50px] flex-shrink-0">
          <Footer />
        </div>
      </main>
    </Router>
  );
}
