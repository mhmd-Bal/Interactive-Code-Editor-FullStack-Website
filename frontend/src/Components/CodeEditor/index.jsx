import React, { useState } from "react";
import AppButton from "../Button";
import axios from "axios";
import "./styles.css";

const CodeEditor = ({ setOutput }) => {
  const [filename, setFilename] = useState("YourFileName");
  const [content, setContent] = useState("print('Hello World!');");

  const handleDownloadClick = () => {
    console.log("Download clicked");
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mycode.py";
    document.body.appendChild(element);
    element.click();
  };

  const handleSaveClick = () => {
    console.log("Save clicked");
    let headers= {'Authorization': 'Bearer ' + localStorage.getItem('token')};
    axios.post('http://localhost:8000/api/v0.0.1/code/insert', {
      name: filename,
      content: content,
      user_id:localStorage.getItem('user_id'),
    },{ headers })
    .then(function (response) {
      alert(response.data.status);
      console.log(localStorage.getItem('user_id'));
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  const handleCompileClick = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("LanguageChoice", "5");
    encodedParams.append("Program", content);

    const options = {
      method: "POST",
      url: process.env.REACT_APP_CODE_COMPILE_API_URL,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_Host,
      },
      data: encodedParams,
    };

    axios.request(options)
      .then(function (response) {
        response.data.Result===null?setOutput('Code Contains Error, Please Fix Code Syntax'):setOutput(response.data.Result)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="code-editor-block">
      <div className="code-editor-panel">
        <div className="code-editor-filename">
        <textarea value={filename}onChange={(e) => setFilename(e.target.value)}></textarea>
        </div>
        <div className="code-editor-controls">
          <AppButton button_name={<i className="fa-solid fa-download"></i>}onClick={handleDownloadClick}/>
          <AppButton button_name={<i className="fa-solid fa-floppy-disk"></i>}onClick={handleSaveClick}/>
          <AppButton button_name={<i className="fa-solid fa-person-running"></i>}onClick={handleCompileClick}/>
        </div>
      </div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    </div>
  );
};

export default CodeEditor;
