"use client";

import React, { useState } from "react";
import { BiChevronLeft, BiLogoGraphql } from "react-icons/bi";
import { usePathname } from "next/navigation";

import { Menus } from "@/constant";
import Link from "next/link";

export default function Sidebar() {
  const path = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <div className="sticky top-0 h-screen">
      <div
        className={`h-screen bg-purple-900 relative duration-300 p-5 pt-8 ${
          !open ? "w-20" : "w-72"
        }`}
      >
        <BiChevronLeft
          size={25}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-purple-900 bg-white duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="text-white flex gap-x-4 items-center text-xl font-bold uppercase">
          <div>
            <BiLogoGraphql
              className={`text-purple-900 bg-blue-100 rounded-md cursor-pointer duration-300 ${
                !open && "rotate-[360deg]"
              }`}
              size={40}
            />
          </div>
          <div className={`${!open && "scale-0"} duration-300`}>Dashboard</div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link key={index} href={Menu.href}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-200 items-center gap-x-4
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  Menu.href === path
                    ? "bg-blue-200 text-purple-900"
                    : "text-gray-300 hover:text-purple-900"
                } `}
              >
                <div>{Menu.src}</div>
                <span
                  className={`${!open && "scale-0"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
