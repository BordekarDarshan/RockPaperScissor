import React from "react";
import "./Signbox.css";

function Signbox({ computer, children }) {
  return (
    <div className={computer ? "computer-signbox" : "signBox"}>{children}</div>
  );
}

export default Signbox;
