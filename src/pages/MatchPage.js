import React, { useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import { useParams } from "react-router-dom";
import "./MatchPage.css";
import YearSelector from "../components/YearSelector";
function MatchPage() {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/match/${teamName}?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };

    fetchMatches();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <p>Select year</p>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h2>
          {teamName} Matches in {year}
        </h2>
        {matches.map((match) => (
          <MatchDetailCard key={match.id} match={match} teamName={teamName} />
        ))}
      </div>
    </div>
  );
}

export default MatchPage;
