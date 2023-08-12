import React from "react";
import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";

export default function Artikel() {
  return (
    <div className="container mb-8">
      <div className="text-bold text-center text-6xl text-teal-700 mb-4">
        Artikel Terkini
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md p-6  text-teal-700">
          <div className="h-48 bg-slate-500 w-full"></div>
          <div className="flex justify-between w-full">
            <div className="flex gap-1 items-center text-sm">
              <FaCalendar /> September 12
            </div>
            <div className="flex gap-1 items-center text-sm">
              <FaUserAlt /> John Doe
            </div>
          </div>
          <div className="font-bold text-3xl w-full my-2">Judul Artikel</div>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi animi
            obcaecati eum nulla pariatur tempora, veniam consequatur non
            temporibus ratione eos necessitatibus deserunt, nihil voluptatum
            quia et laborum consequuntur mollitia!
          </div>
          <div className="flex w-full mt-2">
            <Button className="flex group text-teal-700 border-[3px] py-5 px-2 font-bold border-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300">
              Selengkapnya
              <BiChevronRight
                size={30}
                className="text-white bg-teal-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-teal-700"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md p-6  text-teal-700">
          <div className="h-48 bg-slate-500 w-full"></div>
          <div className="flex justify-between w-full">
            <div className="flex gap-1 items-center text-sm">
              <FaCalendar /> September 12
            </div>
            <div className="flex gap-1 items-center text-sm">
              <FaUserAlt /> John Doe
            </div>
          </div>
          <div className="font-bold text-3xl w-full my-2">Judul Artikel</div>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi animi
            obcaecati eum nulla pariatur tempora, veniam consequatur non
            temporibus ratione eos necessitatibus deserunt, nihil voluptatum
            quia et laborum consequuntur mollitia!
          </div>
          <div className="flex w-full mt-2">
            <Button className="flex group text-teal-700 border-[3px] py-5 px-2 font-bold border-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300">
              Selengkapnya
              <BiChevronRight
                size={30}
                className="text-white bg-teal-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-teal-700"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md p-6  text-teal-700">
          <div className="h-48 bg-slate-500 w-full"></div>
          <div className="flex justify-between w-full">
            <div className="flex gap-1 items-center text-sm">
              <FaCalendar /> September 12
            </div>
            <div className="flex gap-1 items-center text-sm">
              <FaUserAlt /> John Doe
            </div>
          </div>
          <div className="font-bold text-3xl w-full my-2">Judul Artikel</div>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi animi
            obcaecati eum nulla pariatur tempora, veniam consequatur non
            temporibus ratione eos necessitatibus deserunt, nihil voluptatum
            quia et laborum consequuntur mollitia!
          </div>
          <div className="flex w-full mt-2">
            <Button className="flex group text-teal-700 border-[3px] py-5 px-2 font-bold border-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300">
              Selengkapnya
              <BiChevronRight
                size={30}
                className="text-white bg-teal-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-teal-700"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
