import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container flex gap-4 flex-1">
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
      </div>
    </footer>
  );
}
