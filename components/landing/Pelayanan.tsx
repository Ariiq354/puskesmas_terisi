import React from "react";
import { IoIosPaper } from "react-icons/io";

import { pelayanan } from "@/constant";

export default function Pelayanan() {
  return (
    <div className="py-12 text-emerald-700 pb-80 mb-[-10rem]">
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-2 xl:col-span-4 text-center font-bold text-5xl text-black">
          Pelayanan Kami
        </div>
        {pelayanan.map((pel, index) => (
          <div
            key={index}
            className="flex bg-emerald-200 rounded-lg hover:bg-emerald-700 hover:text-white p-4 gap-4 w-full hover:translate-y-[-0.5rem] transition-all duration-500"
          >
            <div className="flex items-center text-6xl">{pel.icon}</div>
            <div className="flex flex-col justify-center">
              <div className="font-bold">{pel.name}</div>
              <div>{pel.jadwal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
