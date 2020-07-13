import React from "react";
import Battle from "../HomeComponent/Battle/Battle";
import Header from "../HomeComponent/Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="background">
      <div className="container-fluid">
        <Header></Header>
        <Battle></Battle>
      </div>
    </div>
  );
}

export default Home;
