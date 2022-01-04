import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch("http://localhost:8080/team/");
      const data = await response.json();
      console.log(data);
      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="HomePage">
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id} className="team-tile">
            <Link to={`/team/${team.teamName}`}>{team.teamName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
