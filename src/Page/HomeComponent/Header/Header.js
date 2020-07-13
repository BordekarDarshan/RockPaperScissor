import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../../Components/Heading/Heading";
import "./Header.css";

function Header() {
  return (
    <div className="headerWrapper">
      <Heading>Rock Paper Scissor</Heading>
      <div className="nightVision">
        <FontAwesomeIcon icon={faBolt} size="3x" color="white" />
      </div>
    </div>
  );
}

export default Header;
