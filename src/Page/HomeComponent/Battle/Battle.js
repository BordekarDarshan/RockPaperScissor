import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";
import Scorebox from "../../../Components/Scorebox/Scorebox";
import Signbox from "../../../Components/Signbox/Signbox";
import { decideWinner } from "../../../Util/decideWinner";
import rock from "../../../Upload/NewRock.png";
import paper from "../../../Upload/NewPaper.png";
import scissor from "../../../Upload/NewScissor.png";
import "./Battle.css";
import PopUp from "../../../Components/ModalPop/PopUp";

function Battle() {
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [message, setMessage] = useState(null);
  const [playerSign, setPlayerSign] = useState(null);
  const [computerSign, setComputerSign] = useState(null);
  const [show, setShow] = useState(false);

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
  }, 300);

  return (
    <div className="battleArea">
      <div className="battle-area-first-section">
        <div className="playerArea">
          <Heading>Player</Heading>
          <Signbox computer={false}>
            {playerSign && <img src={playerSign} alt="sign"></img>}
          </Signbox>
        </div>

        <div className="computerArea">
          <Heading>Computer</Heading>
          <Signbox computer={true}>
            {computerSign && <img src={computerSign} alt="sign"></img>}
          </Signbox>
        </div>
      </div>
      <div className="battle-area-second-section">
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
              className="btn handSign "
            >
              {playerChoice === "rock" && <img src={rock} alt="sign" />}
              {playerChoice === "paper" && <img src={paper} alt="sign" />}
              {playerChoice === "scissor" && <img src={scissor} alt="sign" />}
            </button>
          ))}
        </div>
        <div className="scoreArea">
          <div className="scoreBoard">
            <Scorebox>{player}</Scorebox>
            <Scorebox>{computer}</Scorebox>
          </div>
          <div className="msgBox">
            <span className="text-white">{message}</span>
          </div>
        </div>
      </div>
      <PopUp show={show} handleClose={handleClose} message={message}></PopUp>
    </div>
  );
}

export default Battle;
