import React, { useEffect, useState } from "react";
import MaterialSymbolsDownload from "../assets/MaterialSymbolsDownload";
import MaterialSymbolsAddRounded from "../assets/MaterialSymbolsAddRounded";
import { getRandomKey } from "../api/getRandomKey";
import { useNavigate } from "react-router-dom";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import axios from "axios";

export default function Navbar({ content }) {
  const navigator = useNavigate();
  const [languageList, setLanguageList] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("C++")
  useEffect(() => {
    const getLanguageList = async () => {
      const options = {
        method: 'GET',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/languages/',
        headers: {
          'X-RapidAPI-Key': 'dac444a4e3msh111b5f06d684b6dp1be82bjsn1145dfc51287',
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        let langArray = []
        response?.data.forEach(element => {
          langArray.push({ "id": element.id, "name": element.name })
        });
        setLanguageList(langArray)
      } catch (error) {
        console.error(error);
      }
    }
    getLanguageList();
  }, [])

  const downloadData = () => {
    const link = document.createElement("a");
    const file = new Blob([content?.code], { type: 'text/plain' });
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
        <div className="text-2xl mt-1 font-bold">Sharer</div>
        {content.page == "code" && (
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
        )}
      </div>
    </nav>
  );
}
