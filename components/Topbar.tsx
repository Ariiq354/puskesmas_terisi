"use client";

import React from "react";

import { signOut } from "next-auth/react";
import { BiFullscreen } from "react-icons/bi";

export default function Topbar() {
  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="w-full bg-slate-300 flex justify-end h-16">
      <div className="flex items-center hover:bg-slate-400 duration-300 px-4">
        <span onClick={() => signOut()}>Log out</span>
      </div>
      <div
        onClick={() => toggleFullScreen()}
        className="flex items-center hover:bg-slate-400 duration-300 px-4"
      >
        <BiFullscreen size={25} />
      </div>
    </div>
  );
}
