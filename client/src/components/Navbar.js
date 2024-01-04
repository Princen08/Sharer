import React from "react";
import MaterialSymbolsDownload from "../assets/MaterialSymbolsDownload";
import MaterialSymbolsAddRounded from "../assets/MaterialSymbolsAddRounded";
import { getRandomKey } from "../api/getRandomKey";
import { useNavigate } from "react-router-dom";

export default function Navbar({ content }) {
  const navigator = useNavigate();
  
  const downloadData = () => {
    console.log(content.code)
    const link = document.createElement("a");
    const file = new Blob([content.code], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    var date = new Date();
    var filename = date.toLocaleTimeString().replace("AM", "").replace("PM", "") + date.toLocaleDateString();
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const createNew = async () => {
    const key = await getRandomKey();
    navigator(`/${key.data.key}`);
    window.location.reload();
  }
  return (
    <nav
      className="sticky top-0 z-50 bg-black p-4"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex justify-between text-white ">
        <div className="text-xl">Sharer</div>
        <div className="flex gap-10">
          <div className="group relative flex justify-end">
            <button onClick={() => createNew()}><MaterialSymbolsAddRounded /></button>
            <span className="absolute top-10 scale-0 rounded bg-gray-800 p-4 text-xs text-white group-hover:scale-100">Create New</span>
          </div>
          <div className="group relative flex justify-end">
            <button onClick={() => downloadData()}><MaterialSymbolsDownload /></button>
            <span className="absolute top-10 scale-0 rounded bg-gray-800 p-4 text-xs text-white group-hover:scale-100">Download</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
