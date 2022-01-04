import { useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";
import "./TeamPage.css";
import { PieChart } from "react-minimal-pie-chart";

const TeamPage = ({ match }) => {
  const [team, setTeam] = useState();
  const { teamName } = useParams();

  useEffect(() => {
    console.log(teamName);
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };

    fetchMatches();
  }, [teamName]);

  if (!team) return <h1>Team not found</h1>;

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team && team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        <p>Win/Loss</p>
        <PieChart
          data={[
            { title: "Wins", value: team.totalWins, color: "#4da375" },
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#a34d5d",
            },
          ]}
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} match={match} teamName={team.teamName} />
      ))}

      <div className="more-link">
        <a href="#">More</a>
      </div>
    </div>
  );
};

export default TeamPage;
