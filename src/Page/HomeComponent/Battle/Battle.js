import React from "react";
import Heading from "../../../Components/Heading/Heading";
import "./Battle.css";

function Battle() {
  return (
    <div className="battleArea">
      <div className="playerArea">
        <Heading>Player</Heading>
      </div>
      <div className="scoreArea">
        <Heading>Score</Heading>
      </div>
      <div className="computerArea">
        <Heading>Computer</Heading>
      </div>
    </div>
  );
}

export default Battle;
