import React, { Component } from "react";
import Heading from "../../Components/Heading/Heading";
import "../../Page/HomeComponent/Battle/Battle.css";
import Header from "../HomeComponent/Header/Header";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      computer: 0,
      pler: null,
      comter: null,
      tie: null,
    };
  }

  decide = (e) => {
    let computerAttack = ["rock", "paper", "scissor"];
    let computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerAttack[computerNumber];
    console.log("player", e, "Computer", computerChoice);

    if (e === computerChoice) {
      console.log("tie");
      this.setState((prev) => ({
        computer: prev.computer,
        player: prev.player,
      }));
    }
    if (e === "rock") {
      if (computerChoice === "paper") {
        console.log("computer win");
        this.setState((prev) => ({ computer: prev.computer + 1 }));
      }
      if (computerChoice === "scissor") {
        console.log("player win");
        this.setState((prev) => ({ player: prev.player + 1 }));
      }
    }
    if (e === "paper") {
      if (computerChoice === "scissor") {
        console.log("computer win");
        this.setState((prev) => ({ computer: prev.computer + 1 }));
      }
      if (computerChoice === "rock") {
        console.log("player win");
        this.setState((prev) => ({ player: prev.player + 1 }));
      }
    }
    if (e === "scissor") {
      if (computerChoice === "rock") {
        console.log("computer win");
        this.setState((prev) => ({ computer: prev.computer + 1 }));
      }
      if (computerChoice === "paper") {
        console.log("player win");
        this.setState((prev) => ({ player: prev.player + 1 }));
      }
    }

    if (this.state.player === 3) {
      this.setState({
        pler: "player Wins",
        player: 0,
        computer: 0,
      });
    }
    if (this.state.computer === 3) {
      this.setState({
        compter: "commputer Wins",
        player: 0,
        computer: 0,
      });
    }
  };

  render() {
    return (
      <div className="background">
        <div className="container-fluid">
          <Header></Header>
          <div className="battleArea">
            <div className="playerArea">
              <Heading>Player</Heading>
              {["rock", "paper", "scissor"].map((btn) => (
                <button onClick={() => this.decide(btn)}>{btn}</button>
              ))}
            </div>
            <div className="scoreArea">
              <Heading>Score</Heading>
              <h1 className="text-white">
                {this.state.player}:{this.state.computer}
              </h1>

              {this.state.pler && (
                <h1 className="text-white">{this.state.pler}</h1>
              )}
              {this.state.comter && (
                <h1 className="text-white">{this.state.comter}</h1>
              )}
            </div>
            <div className="computerArea">
              <Heading>Computer</Heading>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
