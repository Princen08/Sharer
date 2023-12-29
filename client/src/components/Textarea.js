"use client";
import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { useParams } from "react-router-dom";
import Prism, { Grammar, languages, highlight } from "prismjs";
import { getCode } from "../api/getCode";
import { updateCode } from "../api/updateCode";

const Textarea = () => {
  const [code, setCode] = useState("");
  const param = useParams();
  const getData = async () => {
    const res = await getCode(param.id);
    if(res?.data?.data?.data?.length > 0) {
       setCode(res?.data?.data?.data)
    }
  };
  const updateData = async () => {
    await updateCode(code, param.id);
  };

  useEffect(() => {
     updateData();
  }, [code]);

  useEffect(() => {
    getData();
  }, []);
  
  const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n");

  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
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
  );
};
export default Textarea;
