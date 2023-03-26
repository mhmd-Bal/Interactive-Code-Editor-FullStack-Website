import React from "react";
import AppButton from "../Button";
import "./styles.css";

const Compiler = ({ output, handleClearClick }) => {
  return (
    <div className="compiler-block">
      <div className="compiler-panel">
        <div className="compiler-filename">
          <p>Console</p>
        </div>
        <div className="compiler-controls">
          <AppButton button_name="Clear" onClick={handleClearClick} />
        </div>
      </div>
      <div className="compiler-output">
        <p>{output}</p>
      </div>
    </div>
  );
};

export default Compiler;

