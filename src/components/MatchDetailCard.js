import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.css";

function MatchDetailCard({ teamName, match }) {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = !(otherTeam === match.winner);
  return (
    <div
      className={"MatchDetailCard " + (isMatchWon ? "won-card" : "lost-card")}
    >
      <div>
        <span>vs</span>
        <h1>
          <Link to={`/team/${otherTeam}`}> {otherTeam}</Link>
        </h1>
        <h2 className="match-date">{match.matchDate}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.winner} won by {match.resultMargin} {match.result}
        </h3>
      </div>
      <div className="additional-detail">
        <h3 className="match-venue">First Innings </h3>
        <p>{match.team1}</p>
        <h3 className="match-venue">Second Innings </h3>
        <p>{match.team1}</p>
        <h3 className="match-venue">Man of the match </h3>
        <p>{match.team1}</p>
        <h3 className="match-venue">Umpires</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
}

export default MatchDetailCard;
