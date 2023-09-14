import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function TentangKami() {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 items-center my-10 lg:mt-48">
      <div className="flex flex-col gap-4">
        <div className="text-lg">Tentang Kami</div>
        <div className="text-4xl">UPTD Puskesmas Terisi</div>
        <div className="text-xl text-justify">
          UPTD PUSKESMAS TERISI adalah Unit Pelaksana Teknis Dinas Kesehatan
          Kabupaten Indramayu yang bertempat di Kecamatan Terisi dengan wilayah
          kerja meliputi 9 desa yaitu desa Cikawung, desa Jatimunggul,
          Jatimulya, Rajasinga, Plosokerep, Cibereng, Kendayakan, Manggungan dan
          desa Karangasem. Pelayanan yang dibèrikan oleh kami adalah pelayanan
          dalam gedung: Pelayanan Rawat Jalan, Poned 24 jam, Rawat Inap, UGD 24
          jam (Upaya Kesehatan Perorangan -UKP- ) dan Pelayanan Luar Gedung
          (Upaya Kesehatan Masyarakat -UKM- ) yang didukung oleh aparatur
          kewilayahan setempat. Kami selalu berupaya memberikan pelayanan prima
          dengan sepenuh hati bagi para pengguna layanan kami.
        </div>
        <div>
          <Link href="/profil">
            <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
              Selengkapnya
              <BiChevronRight
                size={30}
                className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
              />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="md:block hidden"
          src="/about-img.svg"
          width={2500}
          height={2500}
          alt=""
        ></Image>
      </div>
    </div>
  );
}
