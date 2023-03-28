import React, { useState } from "react";
import CodeEditor from "../../Components/CodeEditor";
import Compiler from "../../Components/Compiler";
import NavBar from "../../Components/NavBar";
import "./styles.css";
import Footer from "../../Components/Footer"

const CodeCompilerPage = () => {
  const [output, setOutput] = useState("Compiler Output");
  localStorage.setItem("current_page", "compile_code");

  const handleClearClick = () => {
    setOutput("");
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <div className="code-section">
        <CodeEditor setOutput={setOutput} />
        <Compiler output={output} handleClearClick={handleClearClick} />
      </div>
      <Footer />
    </div>
  );
};

export default CodeCompilerPage;
