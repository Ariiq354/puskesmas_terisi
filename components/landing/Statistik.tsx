import React from "react";

import { FaUserMd, FaUsers, FaHospital } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";

export default function Statistik() {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 container justify-center gap-6">
      <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md py-4 px-12 text-teal-700">
        <FaUserMd size={60} />
        <div className="font-extrabold text-6xl text-teal-950 text drop-shadow-md mt-4">
          120+
        </div>
        <div>Dokter</div>
      </div>
      <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md py-4 px-12 text-teal-700">
        <FaUsers size={60} />
        <div className="font-extrabold text-6xl text-teal-950 text drop-shadow-md mt-4">
          1000+
        </div>
        <div>Pasien</div>
      </div>
      <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md py-4 px-12 text-teal-700">
        <FaBedPulse size={60} />
        <div className="font-extrabold text-6xl text-teal-950 text drop-shadow-md mt-4">
          13
        </div>
        <div>Kamar</div>
      </div>
      <div className="flex flex-col gap-2 border-4 border-teal-600 items-center bg-white shadow-md py-4 px-12 text-teal-700">
        <FaHospital size={60} />
        <div className="font-extrabold text-6xl text-teal-950 text drop-shadow-md mt-4">
          12
        </div>
        <div>Wilayah</div>
      </div>
    </div>
  );
}
