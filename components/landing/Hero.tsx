import React from "react";
import Image from "next/image";
import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[50rem] section_top bg-cover bg-center bg-no-repeat flex items-center text-white mb-[5rem] z-0">
      <div className="bg-transparent bg-gradient-to-r from-emerald-700 w-full h-full flex items-center">
        <div className="container grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col gap-4">
            <div className="before relative pl-20 text-lg">
              Selamat Datang di
            </div>
            <div className="text-6xl">UPTD Puskesmas Terisi</div>
            <div className="text-2xl text-justify">
              Portal informasi, Data, Edukasi dan Umpan balik Terisi
            </div>
            <div className="flex gap-8">
              <div>
                Jam Pelayanan :<br />
                Senin s/d Kamis : 7.30 - 13.30 <br />
                Jum&apos;at : 7.30 - 11.00 <br />
                Sabtu : 7.30 - 11.30
              </div>
              <div className="flex gap-6 items-center md:flex-row flex-col justify-center">
                <Link
                  href={"https://www.youtube.com/@puskesmasterisi6854"}
                  target="__blank"
                >
                  <div className="bg-emerald-500 border-white border-2 rounded-full p-1 text-white md:ml-6">
                    <AiFillPlayCircle size={40} />
                  </div>
                </Link>
                <div>Tonton Kami</div>
              </div>
            </div>
          </div>
          {/* <div className="md:block hidden">
            <Image src="/home-img.svg" width={2500} height={2500} alt=""></Image>
          </div> */}
        </div>
      </div>
    </div>
  );
}
