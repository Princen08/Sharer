import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";
import { getCode } from "../api/getCode";
import { useEffect, useState } from "react";

const Code = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar></Navbar>
        <Textarea></Textarea>
      </div>
    </>
  );
};
export default Code;
