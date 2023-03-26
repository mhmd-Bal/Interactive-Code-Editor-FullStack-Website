// import React, { useState } from "react";
// import AppButton from "../Button";
// import "./styles.css";

// const Compiler = ({ output }) => {
//   const [filename, setFilename] = useState("Shell");

//   // const handleClearClick = () => {
//   //   setOutput("");
//   // };

//   return (
//     <div className="compiler-block">
//       <div className="compiler-panel">
//         <div className="compiler-filename">
//           <p>{filename}</p>
//         </div>
//         <div className="compiler-controls">
//           {/* <AppButton button_name="Clear" onClick={handleClearClick} /> */}
//         </div>
//       </div>
//       <div className="compiler-output">
//         <p>{output}</p>
//       </div>
//     </div>
//   );
// };

// export default Compiler;
import React from "react";
import AppButton from "../Button";
import "./styles.css";

const Compiler = ({ output, handleClearClick }) => {
  return (
    <div className="compiler-block">
      <div className="compiler-panel">
        <div className="compiler-filename">
          <p>Shell</p>
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

