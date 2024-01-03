"use client";
import React from "react";
import Editor from "react-simple-code-editor";
import  { languages, highlight } from "prismjs";


const Textarea = ({codeData}) => {

  const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n");

  return (
    <div className="flex flex-col">
      <div>
        <Editor
          value={codeData.code}
          onValueChange={(code) => {codeData.setCode(code) }}
          highlight={(code) => hightlightWithLineNumbers(code, languages.js)}
          padding={10}
          textareaId="codeArea"
          className="editor"
          placeholder="Write or paste code here..."
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 13,
            outline: 0,
          }}
        />
      </div>
    </div>
  );
};
export default Textarea;
