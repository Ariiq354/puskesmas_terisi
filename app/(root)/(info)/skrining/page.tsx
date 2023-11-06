import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function Skrining() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl md:text-6xl text-center">
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
            <Button
              variant={"outline"}
              className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300"
            >
              Skrining Kesehatan Jiwa
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
