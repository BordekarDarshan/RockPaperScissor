import rock from "../Upload/rock.png";
import paper from "../Upload/paper.png";
import scissor from "../Upload/scissor.png";

export const decideWinner = (
  player,
  computer,
  playerChoice,
  setPlayer,
  setComputer,
  setMessage,
  setPlayerSign,
  setComputerSign,
  setShow
) => {
  let computerAttack = ["rock", "paper", "scissor"];
  let generateNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerAttack[generateNumber];

  if (playerChoice === computerChoice) {
    setPlayerSign(
      playerChoice === "rock"
        ? playerChoice === "paper"
          ? paper
          : rock
        : scissor
    );
    setComputerSign(
      computerChoice === "rock"
        ? computerChoice === "paper"
          ? paper
          : rock
        : scissor
    );
    setPlayer(player);
    setComputer(computer);
    setMessage("It was a draw");
  }
  if (playerChoice === "rock") {
    setPlayerSign(rock);
    if (computerChoice === "paper") {
      setComputerSign(paper);
      setComputer(computer + 1);
      setMessage("computer won this round!");
    }
    if (computerChoice === "scissor") {
      setComputerSign(scissor);
      setPlayer(player + 1);
      setMessage("You won this round!");
    }
  }
  if (playerChoice === "paper") {
    setPlayerSign(paper);
    if (computerChoice === "scissor") {
      setComputerSign(scissor);
      setComputer(computer + 1);
      setMessage("computer won this round!");
    }
    if (computerChoice === "rock") {
      setComputerSign(rock);
      setPlayer(player + 1);
      setMessage("You won this round!");
    }
  }
  if (playerChoice === "scissor") {
    setPlayerSign(scissor);
    if (computerChoice === "rock") {
      setComputerSign(rock);
      setComputer(computer + 1);
      setMessage("computer won this round!");
    }
    if (computerChoice === "paper") {
      setComputerSign(paper);
      setPlayer(player + 1);
      setMessage("You won this round!");
    }
  }

  if (player === 3) {
    setPlayer(0);
    setComputer(0);
    setMessage("You Won");
    setPlayerSign(null);
    setComputerSign(null);
    setShow(true);
  }

  if (computer === 3) {
    setPlayer(0);
    setComputer(0);
    setMessage("Computer Won");
    setPlayerSign(null);
    setComputerSign(null);
    setShow(true);
  }
};
