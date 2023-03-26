// import React from "react";
// import AppButton from "../Button";
// import "./styles.css";

// const CodeEditor = () => {
//     let filename = "Name of File.py";
    
//     return (
//         <div className="code-editor-block">
//             <div className="code-editor-panel">
//                 <div className="code-editor-filename">
//                     <p>{filename}</p>
//                 </div>
//                 <div className="code-editor-controls">
//                     <AppButton button_name={<i class="fa-solid fa-download"></i>}/>
//                     <AppButton button_name={<i class="fa-solid fa-floppy-disk"></i>}/>
//                     <AppButton button_name={<i class="fa-solid fa-person-running"></i>}/>
//                 </div>
//             </div>
//             <textarea placeholder="print('Hello World!');"></textarea>
//         </div>
//     )
// }

// export default CodeEditor;

import React, { useState } from "react";
import AppButton from "../Button";
import axios from "axios";
import "./styles.css";

const CodeEditor = () => {
  const [filename, setFilename] = useState("Name of File.py");
  const [content, setContent] = useState("print('Hello World!');");

  const handleDownloadClick = () => {
    // TODO: implement download functionality
    console.log("Download clicked");
  };

  const handleSaveClick = () => {
    // TODO: implement save functionality
    console.log("Save clicked");
  };

  const handleCompileClick = () => {
    axios
      .post("/api/compile", { code: content })
      .then((response) => {
        console.log(response.data);
        // TODO: display the response data in the compiler output
      })
      .catch((error) => {
        console.log(error);
        // TODO: display an error message in the compiler output
      });
  };

  return (
    <div className="code-editor-block">
      <div className="code-editor-panel">
        <div className="code-editor-filename">
          <p>{filename}</p>
        </div>
        <div className="code-editor-controls">
          <AppButton button_name={<i className="fa-solid fa-download"></i>} onClick={handleDownloadClick} />
          <AppButton button_name={<i className="fa-solid fa-floppy-disk"></i>} onClick={handleSaveClick} />
          <AppButton button_name={<i className="fa-solid fa-person-running"></i>} onClick={handleCompileClick} />
        </div>
      </div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    </div>
  );
};

export default CodeEditor;
