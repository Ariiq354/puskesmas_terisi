import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function Skrining() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-teal-800 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl md:text-6xl text-center">
        Skrining Kesehatan Jiwa
      </div>
      <div className="container flex flex-col items-center  py-20">
        <div>
          <p className="text-xl text-justify py-7">
            Tanpa disadari, gangguan kesehatan jiwa seringkali menjadi masalah
            yang sangat meresahkan bagi masyarakat, terutama di tengah masa
            pandemi yang telah berlangsung dalam beberapa tahun terakhir ini.
            Kondisi ini tidak hanya memengaruhi individu secara langsung, tetapi
            juga berdampak pada kualitas hidup dan kesejahteraan keluarga dan
            masyarakat secara lebih luas. Oleh karena itu, penting untuk
            memahami dan mengenali tanda-tanda awal gangguan kesehatan jiwa
            sejak dini, sebab hal ini dapat membantu dalam menurunkan risiko
            keparahan gangguan jiwa yang mungkin timbul.
            <br />
            <br />
            Yuk Cek Kesehatan Jiwa anda secara Gratis! dengan mengakses link
            berikut!
          </p>
        </div>
        <div className="flex w-full mt-2">
          <Link href={"https://bit.ly/Deteksi_GME-IM"} target="__blank">
            <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
              Skrining Kesehatan Jiwa
              <BiChevronRight
                size={30}
                className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-20 w-full bg-teal-800 h-[20rem] sm:h-[15rem] text-white text-[1.3rem] text-justify justify-center items-center flex flex-col xl:flex-row">
        <div className="container w-full bg-teal-800 h-[20rem] sm:h-[15rem] text-white text-[1.3rem] text-justify justify-center lg:items-center flex flex-col xl:flex-row">
          <p>
            Anda juga dapat berkonsultasi dengan petugas kesehatan jiwa kami
            melalui nomor hotline berikut ini
          </p>
          <a href="https://api.whatsapp.com/send/?phone=6285171110351&text&type=phone_number&app_absent=0">
            <Button className="flex group text-white py-5 font-bold bg-green-500 hover:bg-white hover:text-emerald-700 transition-all duration-300 px-4 lg:ml-4 mt-4 xl:mt-0">
              <BsWhatsapp className="mr-2" />
              +62 851-7111-0351
            </Button>
          </a>
        </div>
      </div>
      {/* <div className="container py-20 w-full bg-teal-800 h-[20rem] sm:h-[15rem] text-white text-[1.3rem] text-justify justify-center items-center flex flex-col xl:flex-row">
        <p>
          Anda juga dapat berkonsultasi dengan petugas kesehatan jiwa kami
          melalui nomor hotline berikut ini
        </p>
        <a href="https://api.whatsapp.com/send/?phone=6285171110351&text&type=phone_number&app_absent=0">
          <Button className="flex group text-white py-5 px-2 font-bold bg-green-500 hover:bg-white hover:text-emerald-700 transition-all duration-300 px-4 md:ml-4 mt-4 xl:mt-0">
            <BsWhatsapp className="mr-2" />
            +62 851-7111-0351
          </Button>
        </a>
      </div> */}
    </>
  );
}
