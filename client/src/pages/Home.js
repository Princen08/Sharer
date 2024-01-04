import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getRandomKey } from "../api/getRandomKey";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigator = useNavigate();
  
  const handleClick = async () => {
    const key = await getRandomKey();
    navigator(`/${key.data.key}`);
  };

  return (
    <>
      <div className="flex flex-col" style={{ fontFamily: "Inter" }}>
        <Navbar content = {{page: "home"}} ></Navbar>
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleClick}
            className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full"
          >
            Create new
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
