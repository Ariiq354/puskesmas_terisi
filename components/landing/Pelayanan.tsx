import React from "react";
import { IoIosPaper } from "react-icons/io";

import { pelayanan } from "@/constant";

export default function Pelayanan() {
  return (
    <div className="bg-emerald-200 py-12 text-emerald-700 pb-80 mb-[-10rem]">
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-2 font-bold text-5xl">Pelayanan Kami</div>
        {pelayanan.map((pel, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg border-2 border-emerald-300 hover:border-emerald-700 p-4 gap-4 transition-colors duration-300 w-full"
          >
            <div className="flex items-center text-6xl">{pel.icon}</div>
            <div className="flex flex-col justify-center">
              <div>{pel.name}</div>
              <div>{pel.jadwal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
