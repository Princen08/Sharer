import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav
      className="flex items-center sticky top-0 z-50 justify-between flex-wrap bg-black p-4"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex flex-row item-center text-white ">
        <h1 className="text-xl">Sharer</h1>
      </div>
    </nav>
  );
}
