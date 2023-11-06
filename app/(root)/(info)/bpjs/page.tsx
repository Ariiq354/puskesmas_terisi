import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function BPJS() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl md:text-6xl text-center">
        Skrining BPJS Kesehatan
      </div>
      <div className="container flex flex-col items-center  py-20">
        <div>
          <p className="text-xl text-justify py-7">
            Badan Penyelenggara Jaminan Sosial (BPJS) Kesehatan menghadirkan
            layanan skrining kesehatan yang bisa diakses secara daring dalam
            upaya meningkatkan mutu pelayanan bagi peserta Program Jaminan
            Kesehatan Nasional (JKN).
            <br />
            <br />
            Yuk Cek Kesehatanmu dengan Skrining BPJS Kesehatan!
          </p>
        </div>
        <div className="flex w-full mt-2">
          <Link
            href={
              "https://webskrining.bpjs-kesehatan.go.id/skrining/index.html"
            }
            target="__blank"
          >
            <Button
              variant={"outline"}
              className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300"
            >
              Skrining BPJS Kesehatan
              <BiChevronRight
                size={30}
                className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
              />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
