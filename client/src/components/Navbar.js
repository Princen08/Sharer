import React from "react";

export default function Navbar() {
  return (
    <nav
      className="flex items-center sticky top-0 z-50 justify-between flex-wrap bg-black p-4"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight">Share</span>
      </div>
    </nav>
  );
}
