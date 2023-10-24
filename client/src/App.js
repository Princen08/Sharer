import React from "react";
import Home from "./pages/Home";
import Code from "./pages/Code"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/> 
        <Route path="/:id" element = {<Code/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
