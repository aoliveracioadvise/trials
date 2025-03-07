import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/Auth/LoginForm";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Dashboard } from "./pages/Dashboard";
import { Trials } from "./pages/Trials";
import { Analytics } from "./pages/Analytics";
import { Physicians } from "./pages/Physicians";
export function App() {
  // For demo purposes, we'll show the dashboard instead of login
  const isAuthenticated = true;
  if (!isAuthenticated) {
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
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trials" element={<Trials />} />
            <Route path="/physicians" element={<Physicians />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
