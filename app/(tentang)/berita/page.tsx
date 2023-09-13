import React from "react";
import Link from "next/link";

import { formatDateToDDMMYYYY } from "@/lib/utils";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

export default async function Berita() {
  const dataBerita = await prismadb.tb_berita_artikel.findMany({
    where: {
      kategori: 0,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const dataArtikel = await prismadb.tb_berita_artikel.findMany({
    where: {
      kategori: 1,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const recentBerita = dataBerita?.slice(0, 3);

  const recentArtikel = dataArtikel?.slice(0, 3);

  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Berita Puskesmas
      </div>

      <div className="container my-24 mx-auto md:px-6 ">
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {/* Main News List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
              {/* Your existing main news list code */}

              {dataBerita?.map((item) => (
                <div key={item.id_berita} className="mb-6">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex">
                      <div className="mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                        <Image
                          src={item.path_image}
                          width={500}
                          height={500}
                          className="w-full"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-3 text-lg font-bold">{item.nama}</h5>
                      <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                        <small>
                          Published{" "}
                          <u>{formatDateToDDMMYYYY(item.created_at)}</u> by{" "}
                          {item.penulis}
                        </small>
                      </p>
                      <p className="mb-4 pb-2">{item.deskripsi}</p>
                      <Link
                        href={`/berita/${item.id_berita}`}
                        className="inline-block rounded-full bg-teal-950 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News List (Added on the right) */}
          <div className="lg:col-span-1 bg-gray-50 rounded">
            <div className="justify-center text-center py-6">
              <h2 className="text-2xl font-semibold mb-4">Berita Terbaru</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Add your list of latest news items here */}
              {recentBerita?.map((item) => (
                <Link
                  href={`/berita/${item.id_berita}`}
                  key={item.id_berita}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8 mx-4"
                >
                  <div>
                    <Image
                      src={item.path_image}
                      width={500}
                      height={500}
                      className="w-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 lg:text-base text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.nama}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.deskripsi}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="justify-center text-center py-6">
              <h2 className="text-2xl font-semibold mt-4 mb-4">
                Artikel Terbaru
              </h2>
            </div>
            {/* Add your list of latest news items here */}
            <div className="flex flex-wrap justify-center">
              {/* Center the cards */}
              {recentArtikel?.map((item) => (
                <Link
                  href={`/berita/${item.id_berita}`}
                  key={item.id_berita}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8 mx-4"
                >
                  <div>
                    <Image
                      src={item.path_image}
                      width={500}
                      height={500}
                      className="w-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 lg:text-base text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.nama}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.deskripsi}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
