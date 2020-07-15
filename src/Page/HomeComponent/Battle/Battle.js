import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";
import Scorebox from "../../../Components/Scorebox/Scorebox";
import Signbox from "../../../Components/Signbox/Signbox";
import { decideWinner } from "../../../Util/decideWinner";
import rock from "../../../Upload/rock.png";
import paper from "../../../Upload/paper.png";
import scissor from "../../../Upload/scissor.png";
import "./Battle.css";
import PopUp from "../../../Components/ModalPop/PopUp";

function Battle(props) {
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [message, setMessage] = useState(null);
  const [playerSign, setPlayerSign] = useState(null);
  const [computerSign, setComputerSign] = useState(null);
  const [show, setShow] = useState(false);

  console.log(player, computer);

  const handleClose = () => {
    setShow(false);
    setPlayerSign(null);
    setComputerSign(null);
    setMessage(null);
  };

  setTimeout(() => {
    if (computer === 3) {
      setMessage("Computer Won");
      setShow(true);
      setPlayer(0);
      setComputer(0);
    }
    if (player === 3) {
      setMessage("You Won");
      setShow(true);
      setPlayer(0);
      setComputer(0);
    }
  }, 500);

  return (
    <div className="battleArea">
      <div className="playerArea">
        <Heading>Player</Heading>
        <Signbox>
          {playerSign && <img src={playerSign} alt="sign"></img>}
        </Signbox>
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
                  setMessage,
                  setPlayerSign,
                  setComputerSign,
                  setShow
                )
              }
              key={index}
              className="btn handSign"
            >
              <span className="hh">
                {playerChoice === "rock" && <img src={rock} alt="sign" />}
                {playerChoice === "paper" && <img src={paper} alt="sign" />}
                {playerChoice === "scissor" && <img src={scissor} alt="sign" />}
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
        <div className="msgBox">
          <span className="text-white">{message}</span>
        </div>
      </div>
      <div className="computerArea">
        <Heading>Computer</Heading>
        <Signbox>
          {computerSign && <img src={computerSign} alt="sign"></img>}
        </Signbox>
      </div>
      <PopUp show={show} handleClose={handleClose} message={message}></PopUp>
    </div>
  );
}

export default Battle;
