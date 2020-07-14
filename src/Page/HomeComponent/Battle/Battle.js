import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";
import Scorebox from "../../../Components/Scorebox/Scorebox";
import Signbox from "../../../Components/Signbox/Signbox";
import { decideWinner } from "../../../Util/decideWinner";
import rock from "../../../Upload/rock.png";
import paper from "../../../Upload/paper.png";
import scissor from "../../../Upload/scissor.png";
import "./Battle.css";

function Battle() {
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [message, setMessage] = useState(null);

  return (
    <div className="battleArea">
      <div className="playerArea">
        <Heading>Player</Heading>
        <Signbox></Signbox>
        <div className="attack">
          {["rock", "paper", "scissor"].map((playerChoice, index) => (
            <button
              onClick={() =>
                decideWinner(
                  player,
                  computer,
                  playerChoice,
                  setPlayer,
                  setComputer,
                  setMessage
                )
              }
              key={index}
              className="btn handSign"
            >
              <span className="hh">
                {playerChoice === "rock" && <img src={rock} />}
                {playerChoice === "paper" && <img src={paper} />}
                {playerChoice === "scissor" && <img src={scissor} />}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="scoreArea">
        <Heading>Score</Heading>
        <div className="scoreBoard">
          <Scorebox>{player}</Scorebox>
          <Scorebox>{computer}</Scorebox>
        </div>
      </div>
      <div className="computerArea">
        <Heading>Computer</Heading>
        <Signbox></Signbox>
      </div>
    </div>
  );
}

export default Battle;
