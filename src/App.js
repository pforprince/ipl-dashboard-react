import TeamPage from "./pages/TeamPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MatchPage from "./pages/MatchPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/team/:teamName" element={<TeamPage />} />
          <Route path="/team/:teamName" element={<TeamPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
