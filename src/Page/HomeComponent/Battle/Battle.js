import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";
import { decideWinner } from "../../../Util/decideWinner";
import "./Battle.css";

function Battle() {
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [message, setMessage] = useState(null);

  return (
    <div className="battleArea">
      <div className="playerArea">
        <Heading>Player</Heading>
        {["rock", "paper", "scissor"].map((btn) => (
          <button
            onClick={() =>
              decideWinner(
                player,
                computer,
                btn,
                setPlayer,
                setComputer,
                setMessage
              )
            }
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="scoreArea">
        <Heading>Score</Heading>
        <h1 className="text-white">
          {player}:{computer}
        </h1>
        <h1 className="text-white">{message}</h1>
      </div>
      <div className="computerArea">
        <Heading>Computer</Heading>
      </div>
    </div>
  );
}

export default Battle;
