import Image from "next/image";
import React from "react";

export default function Profil() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl pb-4">
        Profil Puskesmas
      </div>
      <div className="flex justify-center my-10">
        <Image alt="" src="/gambar.jpeg" width={1000} height={1000}></Image>
      </div>
      <div className="bg-emerald-200 w-full text-emerald-900 ">
        <div className="container grid md:grid-cols-2 grid-cols-1 items-center py-10">
          <div className="flex flex-col items-center px-10 gap-2">
            <div className="text-6xl font-bold">Visi</div>
            <div className="text-xl">
              INDRAMAYU BERMARTABAT “ Bersih, Religius, Maju, Adil, Makmur dan
              Hebat”
            </div>
          </div>
          <div className="flex flex-col items-center pl-10 gap-2">
            <div className="text-6xl font-bold">Misi</div>
            <div className="text-2xl font-semibold">
              “SAPTA NATA MULIA JAYA”
            </div>
            <ol className="list-decimal ">
              <li>
                Tata Kelola pemerintahan yang melayani, melindungi, bersih,
                bebas korupsi, kolusi, nepotisme. Transparan, akuntabel,
                professional dan demokratis
              </li>
              <li>
                Peningkatan Pelayanan Kehidupan Beragama, kepercayaan, pemahaman
                danpengamalan agama serta kerukunan hidup antar umat beragama
                dan budaya dalam bingkai kebangsaan Bhineka Tunggal Ika
              </li>
              <li>
                Terpenuhinya kebutuhan sandang, pangan dan papan dalam jumlah
                dan kualitas yang memadai dan merata
              </li>
              <li>
                Meningkatkan kualitas hidup masyarakat yang layak sebagai upaya
                penanggulangan kemiskinan melalui peningkatan sumber daya
                sehingga mampu berdikari
              </li>
              <li>
                Peningkatan pelayanan pendidikan, kesehatan dan pertumbuhan
                ekonomi
              </li>
              <li>
                Peningkatan pelaksanaan pembangunan disegala bidan sehingga
                terpenuhinya kebutuhan masyarakat secara adil dan merata
              </li>
              <li>
                Mewujudkan Indramayu sebagai daerah yang unggul dan memiliki
                daya saing melalui kemandirian ekonomi bebasis sumber daya alam
                dan pengembangan industry pertanian, perikanan dan migas
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container my-10">
        <Image alt="" src="/tatanilai.png" width={1500} height={1500}></Image>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 p-10">
        <div className="md:col-span-2 col-span-1 text-emerald-900 text-5xl flex justify-center p-4 bg-emerald-200 my-10">
          Wilayah Kerja
        </div>
        <div className="flex justify-center">
          <Image alt="" src="/wilayah.png" width={300} height={300}></Image>
        </div>
        <div className="text-xl">
          <p>
            Wilayah kerja UPTD Puskesmas Terisi terdiri dari 9 desa dan memiliki
            1 Puskesmas Induk dan 3 Puskesmas Pembantu yaitu : 1) Pustu Cikawung
            2) Pustu Karangasem 3) Pustu Manggungan.
          </p>
          <br />
          <p>
            Secara geografis, posisi UPTD Puskesmas Terisi terletak pada titik
            Kordinat -6.484371,108.154670, serta batas wilayah kerja :
          </p>
          <br />
          <table>
            <tbody>
              <tr>
                <td>Sebelah Utara</td>
                <td>: Wilayah kerja UPTD Puskesmas Losarang</td>
              </tr>
              <tr>
                <td>Sebelah Selatan</td>
                <td>: Wilayah kerja UPTD Puskesmas Ujung Jaya Kab. Sumedang</td>
              </tr>
              <tr>
                <td>Sebelah Timur</td>
                <td>: Wilayah kerja UPTD Puskesmas Cikedung</td>
              </tr>
              <tr>
                <td>Sebelah Barat</td>
                <td>: Wilayah kerja UPTD Puskesmas Gabus Wetan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:col-span-2 col-span-1 flex justify-center">
          <Image alt="" src="/penduduk.png" width={500} height={500}></Image>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <div className="md:col-span-2 col-span-1 text-emerald-900 text-5xl flex justify-center p-4 bg-emerald-200 my-10">
          Struktur Organisasi
        </div>
        <div className="flex justify-center">
          <Image alt="" src="/org1.png" width={1000} height={1000}></Image>
        </div>
        <div className="flex justify-center">
          <Image alt="" src="/org2.png" width={1000} height={1000}></Image>
        </div>
      </div>
    </>
  );
}
