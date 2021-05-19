import React from "react";
import Header from "../HomeComponent/Header/Header";
import Battle from "../HomeComponent/Battle/Battle";
import "./Home.css";

function Home() {
  return (
    <div className="background">
      <Header></Header>
      <Battle></Battle>
    </div>
  );
}

export default Home;
