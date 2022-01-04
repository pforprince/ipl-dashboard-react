import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.css";
function YearSelector({ teamName }) {
  const startYear = 2008;
  const endYear = 2020;
  var years = [];
  for (var i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return (
    <div className="year-selector">
      <ul>
        {years.map((year) => (
          <li>
            <Link to={`/match/${teamName}/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YearSelector;
