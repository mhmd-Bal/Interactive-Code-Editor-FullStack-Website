import React from "react";
import CodeEditor from "../../Components/CodeEditor";
import NavBar from '../../Components/NavBar';

const CodeCompilerPage = () => {
  return (
    <div style={{overflowX: "hidden"}}>
      <NavBar />
      <CodeEditor />
    </div>
  );
};

export default CodeCompilerPage;