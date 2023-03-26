import React from "react";
import CodeEditor from "../../Components/CodeEditor";
import Compiler from "../../Components/Compiler";
import NavBar from '../../Components/NavBar';
import "./styles.css";

const CodeCompilerPage = () => {
  return (
    <div style={{overflowX: "hidden"}}>
      <NavBar />
      <div className="code-section">
        <CodeEditor />
        <Compiler />
      </div>
    </div>
  );
};

export default CodeCompilerPage;