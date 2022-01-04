import React from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.css";
function MatchSmallCard({ teamName, match }) {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = !(otherTeam === match.winner);

  return (
    <div
      className={"MatchSmallCard " + (isMatchWon ? "won-card" : "lost-card")}
    >
      <span> vs </span>
      <p>
        <Link to={`/team/${otherTeam}`}> {otherTeam}</Link>
      </p>
      <p>
        {match.winner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}

export default MatchSmallCard;
