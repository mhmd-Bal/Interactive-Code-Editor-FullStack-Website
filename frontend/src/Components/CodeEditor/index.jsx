import React from "react";
import AppButton from "../Button";
import "./styles.css";

const CodeEditor = () => {
    let filename = "Name of File.py";
    
    return (
        <div className="code-editor-block">
            <div className="code-editor-panel">
                <div className="code-editor-filename">
                    <p>{filename}</p>
                </div>
                <div className="code-editor-controls">
                    <AppButton button_name={<i class="fa-solid fa-download"></i>}/>
                    <AppButton button_name={<i class="fa-solid fa-floppy-disk"></i>}/>
                    <AppButton button_name={<i class="fa-solid fa-person-running"></i>}/>
                </div>
            </div>
            <textarea placeholder="print('Hello World!');"></textarea>
        </div>
    )
}

export default CodeEditor;