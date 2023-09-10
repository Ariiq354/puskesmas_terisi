import Image from "next/image";
import React from "react";

export default function Inovasi() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-teal-800 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl">
        Inovasi Puskesmas
      </div>
      <div className="container my-4">
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <Image alt="" src="/inov1.jpeg" width={500} height={500} />
          </div>
          <div className="flex justify-center">
            <Image alt="" src="/inov2.jpeg" width={500} height={500} />
          </div>
          <div className="col-span-2 text-justify indent-12 mt-4">
            <b>INOVASI PUSKESMAS SEHATI</b> Selamatkan ibu hamil, ibu bersalin,
            ibu nifas resiko tinggi dan komplikasi atau yang dikenal dengan
            sehati merupakan inovasi yang bertujuan menurunkan angka kematian
            ibu dan bayi di wilayah kerja puskesmas Terisi. Pelayanan ANC
            TERPADU dilaksanakan secara terintegrasi dengan melibatkan lintas
            program terkait yaitu Labpratorium, Gizi,kesehatan gigi dan mulut,
            P2p IMS, P2TB, Promkes,kesehatan Jiwa, perkesmas,imunusasi, PTM dan
            dokter pelaksana medis. Kegiatan yang dilakukan adalah pemantauan
            ibu hamil trimester 3, ibu hamil, ibu nifas, serta bayi resiko
            tinggi juga dilakukan. Dilakukannya rujukan terencana pada ibu hamil
            yg mempunyai riwayat resiko tinggi. Khusus ibu hamil , ibu bersalin,
            ibu nifas resti dan komplikasi yang tidak mau ditatalaksana lebih
            lanjut ke faskes yg lebih lengkap dilakukan kunjungan rumah secara
            terintegrasi dengan lintas program terkait sesuai kasus Dengan
            program sehati semoga tidak ada lagi kematian ibu bersalin dan
            kematian bayi . Salam sehat ..
          </div>
        </div>
      </div>
    </>
  );
}
