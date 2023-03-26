import React, { useState } from "react";
import AppButton from "../Button";
import axios from "axios";
import "./styles.css";

const CodeEditor = ({ setOutput }) => {
  const [filename, setFilename] = useState("Name of File.py");
  const [content, setContent] = useState("print('Hello World!');");

  const handleDownloadClick = () => {
    console.log("Download clicked");
  };

  const handleSaveClick = () => {
    console.log("Save clicked");
  };

  const handleCompileClick = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("LanguageChoice", "5");
    encodedParams.append("Program", content);

    const options = {
      method: "POST",
      url: "https://code-compiler.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "c2f267bd0cmsh63f6cc991a18825p1066f7jsn631466f02f8b",
        "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.Result);
        setOutput(response.data.Result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="code-editor-block">
      <div className="code-editor-panel">
        <div className="code-editor-filename">
          <p>{filename}</p>
        </div>
        <div className="code-editor-controls">
          <AppButton
            button_name={<i className="fa-solid fa-download"></i>}onClick={handleDownloadClick}/>
          <AppButton
            button_name={<i className="fa-solid fa-floppy-disk"></i>}onClick={handleSaveClick}/>
          <AppButton
            button_name={<i className="fa-solid fa-person-running"></i>}onClick={handleCompileClick}/>
        </div>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </div>
  );
};

export default CodeEditor;
