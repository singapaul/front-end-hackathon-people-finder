import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ResultsPage from "./Pages/ResultsPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="search" element={<ResultsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
