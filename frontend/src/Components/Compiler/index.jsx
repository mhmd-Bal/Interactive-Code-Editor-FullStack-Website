// import React from "react";
// import AppButton from "../Button";
// import "./styles.css";

// const Compiler = () => {
//     let filename = "Shell";
//     let output = "Compiler Output";
    
//     return (
//         <div className="compiler-block">
//             <div className="compiler-panel">
//                 <div className="compiler-filename">
//                     <p>{filename}</p>
//                 </div>
//                 <div className="compiler-controls">
//                     {/* <AppButton button_name={<i className="fa-solid fa-eraser"></i>}/> */}
//                     <AppButton button_name="Clear"/>
//                 </div>
//             </div>
//             <div className="compiler-output">
//                 <p>{output}</p>
//             </div>
//         </div>
//     )
// }

// export default Compiler;

import React, { useState } from "react";
import AppButton from "../Button";
import axios from "axios";
import "./styles.css";

const Compiler = () => {
  const [filename, setFilename] = useState("Shell");
  const [output, setOutput] = useState("Compiler Output");

  const handleClearClick = () => {
    setOutput("");
  };

  return (
    <div className="compiler-block">
      <div className="compiler-panel">
        <div className="compiler-filename">
          <p>{filename}</p>
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
