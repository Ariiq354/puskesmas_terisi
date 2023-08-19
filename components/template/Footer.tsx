import Image from "next/image";

import { FaFacebookF, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

import { pelayanan } from "@/constant";

export default function Footer() {
  return (
    <footer className="bg-emerald-300">
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-8 border-b-2">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>
          <div className="font-bold text-center">UPTD PUSKESMAS TERISI</div>
          <div className="text-justify text-emerald-700">
            Jln. Raya Rajasinga No. 72B Kecamatan Terisi, Kabupaten Indramayu,
            Kode Pos 45262
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-2xl">Pelayanan</div>
          <div className="text-emerald-700 flex flex-col gap-3">
            {pelayanan.map((pel, index) => (
              <div key={index} className="flex gap-2 items-center">
                {pel.icon}
                {pel.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-2xl">Info Kontak</div>
          <div className="text-emerald-700 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <BiSolidPhoneCall />
              Telp. (0234) 7145147
            </div>
            <div className="flex gap-2 items-center">
              <BiSolidPhoneCall />
              Call Center: 085171110351
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
          <div className="text-emerald-700 flex flex-col gap-3">
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
        Copyright © 2023 UPTD Puskesmas Terisi | All Rights Reserved.
      </div>
    </footer>
  );
}
