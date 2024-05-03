import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import EnterTips from "./pages/enterTips";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enterTips" element={<EnterTips />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
