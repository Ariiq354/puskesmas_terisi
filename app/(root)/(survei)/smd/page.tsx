import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";

export default function Smd() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.webp')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Survei Mawas Diri (SMD)
      </div>
      <div className="container flex items-center py-20">
        <div>
          <p className="text-xl text-justify py-7">
            Survey Mawas Diri (SMD) merupakan suatu upaya bersama yang dilakukan
            oleh Puskesmas dengan melibatkan peran serta masyarakat untuk
            bersama-sama mengidentifikasi permasalahan Kesehatan masyarakat, dan
            menggali potensi-potensi yang dimiliki untuk memecahkan permasalahan
            tersebut.
            <br />
            <br />
            Survey Mawas Diri ini bertujuan untuk mengetahui masalah Kesehatan
            yang ada di masyarakat, dan diharapkan dengan Survey Mawas (SMD)
            diri ini, dapat mengatasi masalah Kesehatan yang ada di masyarakat.
            <br />
            <br />
            Bapak/Ibu/Sdr/I bisa mengisi Survey Mawas Diri melalui link di bawah
            ini:
          </p>
          <div className="flex w-full mt-2">
            <Button
              variant={"outline"}
              className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300"
            >
              Survei SMD Puskesmas Terisi
              <BiChevronRight
                size={30}
                className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
