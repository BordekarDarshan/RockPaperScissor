export const decideWinner = (
  player,
  computer,
  playerChoice,
  setPlayer,
  setComputer,
  setMessage
) => {
  let computerAttack = ["rock", "paper", "scissor"];
  let generateNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerAttack[generateNumber];

  if (playerChoice === computerChoice) {
    setPlayer(player);
    setComputer(computer);
    setMessage("Tie");
  }
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      setComputer(computer + 1);
      setMessage("computer won this round");
    }
    if (computerChoice === "scissor") {
      setPlayer(player + 1);
      setMessage("player won this round");
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      setComputer(computer + 1);
      setMessage("computer won this round");
    }
    if (computerChoice === "rock") {
      setPlayer(player + 1);
      setMessage("player won this round");
    }
  }
  if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      setComputer(computer + 1);
      setMessage("computer won this round");
    }
    if (computerChoice === "paper") {
      setPlayer(player + 1);
      setMessage("player won this round");
    }
  }

  if (player === 3) {
    setPlayer(0);
    setComputer(0);
    setMessage("player won");
  }

  if (computer === 3) {
    setPlayer(0);
    setComputer(0);
    setMessage("computer won");
  }
};
