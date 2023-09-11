import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function Ikm() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-teal-800 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-6xl text-center">
        Survei Indeks Kepuasan Masyarakat (IKM)
      </div>
      <div className="container flex items-center py-20">
        <div>
          <p className="text-xl text-justify py-7">
            Pemerintah dan dunia usaha sangat membutuhkan informasi mengenai
            unit pelayanan di instansi pemerintah secara berkala. Untuk itu,
            Pemerintah menyajikan Indeks Kepuasan Masyarakat secara rutin, yang
            diharapkan dapat memberikan gambaran tentang kualitas pelayanan di
            instansi pemerintah kepada masyarakat. Indeks ini diperoleh dari
            pandangan masyarakat yang terkumpul melalui Survei Kepuasan
            Masyarakat Terhadap Unit Pelayanan Publik.
            <br />
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
          <div className="flex w-full mt-2">
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
      </div>
    </>
  );
}
