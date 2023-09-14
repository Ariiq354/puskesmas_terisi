import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export default function Ikm() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Survei Indeks Kepuasan Masyarakat (IKM)
      </div>
      <div className="container grid lg:grid-cols-2 grid-cols-1 py-20">
        <div className="order-2 lg:order-1">
          <p className="text-xl text-justify py-7">
            <br />
            Survei ini bertujuan untuk menanyakan pendapat masyarakat mengenai
            pengalaman mereka dalam menerima pelayanan dari instansi pemerintah.
            Pertanyaan-pertanyaan dalam survei ini dirancang dengan sejelas
            mungkin, agar tidak memakan banyak waktu Bapak/Ibu/Saudara yang
            sangat berharga.
            <br />
            <br />
            Pendapat yang Bapak/Ibu/Saudara berikan akan sangat membantu dalam
            keberhasilan survei ini, sebagai dasar dalam menyusun indeks
            kepuasan masyarakat guna meningkatkan kualitas layanan dari instansi
            pemerintah kepada masyarakat.
            <br />
            <br />
            Jawaban yang diberikan hanya akan digunakan untuk kepentingan
            survei. Kami mengucapkan terima kasih atas perhatian dan partisipasi
            yang diberikan.
            <br />
            <br />
            Silahkan mengisi formulir survei dengan mengklik tautan yang telah
            disediakan. Terima kasih.
          </p>
          <div className="flex w-full mt-2 justify-center lg:justify-start">
            <Link href={"https://bit.ly/KuesionerSKM-IM"} target="__blank">
              <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
                Survei IKM Puskesmas Terisi
                <BiChevronRight
                  size={30}
                  className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image src="/survey-ikm.png" width={500} height={100} alt="Survey IKM" className="rounded-lg" />
        </div>
      </div>
    </>
  );
}
