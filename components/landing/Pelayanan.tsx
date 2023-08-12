import React from "react";
import { IoIosPaper } from "react-icons/io";

export default function Pelayanan() {
  return (
    <div className="bg-teal-200 py-12 text-teal-700 pb-80 mb-[-10rem]">
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-2 font-bold text-5xl">Pelayanan Kami</div>
        <div className="flex bg-white rounded-lg border-2 border-teal-300 hover:border-teal-700 p-4 gap-4 transition-colors duration-300 w-full">
          <IoIosPaper size={50} />
          <div className="flex flex-col">
            <div>Umum</div>
            <div>Senin</div>
          </div>
        </div>
        <div className="flex bg-white rounded-lg border-2 border-teal-300 hover:border-teal-700 p-4 gap-4 transition-colors duration-300 w-full">
          <IoIosPaper size={50} />
          <div className="flex flex-col">
            <div>Umum</div>
            <div>Senin</div>
          </div>
        </div>
        <div className="flex bg-white rounded-lg border-2 border-teal-300 hover:border-teal-700 p-4 gap-4 transition-colors duration-300 w-full">
          <IoIosPaper size={50} />
          <div className="flex flex-col">
            <div>Umum</div>
            <div>Senin</div>
          </div>
        </div>
        <div className="flex bg-white rounded-lg border-2 border-teal-300 hover:border-teal-700 p-4 gap-4 transition-colors duration-300 w-full">
          <IoIosPaper size={50} />
          <div className="flex flex-col">
            <div>Umum</div>
            <div>Senin</div>
          </div>
        </div>
        <div className="flex bg-white rounded-lg border-2 border-teal-300 hover:border-teal-700 p-4 gap-4 transition-colors duration-300 w-full">
          <IoIosPaper size={50} />
          <div className="flex flex-col">
            <div>Umum</div>
            <div>Senin</div>
          </div>
        </div>
        <div className="flex bg-white rounded-lg border-2 border-teal-300 hover:border-teal-700 p-4 gap-4 transition-colors duration-300 w-full">
          <IoIosPaper size={50} />
          <div className="flex flex-col">
            <div>Umum</div>
            <div>Senin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
