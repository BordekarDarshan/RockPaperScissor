import React from "react";
import "./Scorebox.css";

function Scorebox({ children }) {
  return (
    <div className="scoreBox">
      <span>{children}</span>
    </div>
  );
}

export default Scorebox;
