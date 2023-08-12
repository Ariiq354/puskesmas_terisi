import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaLocationDot,
  FaRegUser,
  FaTooth,
  FaBaby,
  FaLungsVirus,
  FaSyringe,
  FaStethoscope,
  FaUserNurse,
} from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdGirl } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-300">
      {/* <div className="container flex gap-4 flex-1">
        <div className="flex flex-col">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <div>UPTD PUSKESMAS TERISI</div>
          <div>
            Jln. Raya Rajasinga No. 72B Kecamatan Terisi, Indramayu, Indonesia,
            West Java
          </div>
        </div>
        <div className="flex flex-col">
          <div>Jam Pelayanan</div>
          <div>
            Senin - Sabtu: <br /> 7.30 - 14.30
          </div>
          Hotline Puskesmas
        </div>
        <div></div>
        <div></div>
      </div> */}
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-8 border-b-2">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>
          <div className="font-bold text-center">UPTD PUSKESMAS TERISI</div>
          <div className="text-justify text-slate-500">
            Jln. Raya Rajasinga No. 72B Kecamatan Terisi, Indramayu, Indonesia,
            West Java
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-2xl">Pelayanan</div>
          <div className="text-slate-500 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <FaRegUser />
              Umum
            </div>
            <div className="flex gap-2 items-center">
              <FaTooth />
              Kesehatan Gigi dan Mulut
            </div>
            <div className="flex gap-2 items-center">
              <MdGirl />
              Kesehatan Ibu dan Anak
            </div>
            <div className="flex gap-2 items-center">
              <FaBaby />
              Manajemen Terpadu Balita Sakit (MTBS)
            </div>
            <div className="flex gap-2 items-center">
              <FaAmbulance />
              Gawat Darurat
            </div>
            <div className="flex gap-2 items-center">
              <FaLungsVirus />
              Pemeriksaan TBC
            </div>
            <div className="flex gap-2 items-center">
              <FaSyringe />
              Vaksinasi
            </div>
            <div className="flex gap-2 items-center">
              <FaStethoscope />
              Laboratorium
            </div>
            <div className="flex gap-2 items-center">
              <FaUserNurse />
              Komunikasi Informasi & Edukasi
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-2xl">Info Kontak</div>
          <div className="text-slate-500 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <FaPhone />
              (0234) 7145147
            </div>
            <div className="flex gap-2 items-center">
              <GrMail />
              puskesmas_terisi@yahoo.com
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot />
              Jln. Raya Rajasinga No. 72B, Kecamatan Terisi
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-2xl">Follow Us</div>
          <div className="text-slate-500 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <FaFacebookF />
              Facebook
            </div>
            <div className="flex gap-2 items-center">
              <FaInstagram />
              Instagram
            </div>
          </div>
        </div>
      </div>
      <div className="container p-8">
        Copyright © 2023 UPTD Puskesmas Babakan Sari | All Rights Reserved.
      </div>
    </footer>
  );
}
