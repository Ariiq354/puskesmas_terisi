"use client";

import React from "react";

import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiFullscreen } from "react-icons/bi";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span onClick={() => signOut()}>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
