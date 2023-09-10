import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Artikel() {
  const dataBerita = await prisma.tb_berita_artikel.findMany({
    where: { kategori: 0 },
  });

  const dataArtikel = await prisma.tb_berita_artikel.findMany({
    where: { kategori: 1 },
  });

  function formatDateToDDMMYYYY(dateString: string | number | Date) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Sort the dataBerita array by the 'created_at' date in descending order (most recent first)
  dataBerita.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    // Check if dateA and dateB are valid Date objects
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      // Handle invalid dates here or skip items with invalid dates
      return 0; // No change in order
    }

    return dateB.getTime() - dateA.getTime(); // Sort in descending order
  });

  // Slice the first 3 items to get the most recent ones
  const recentBerita = dataBerita.slice(0, 3);

  // Sort the dataBerita array by the 'created_at' date in descending order (most recent first)
  dataArtikel.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    // Check if dateA and dateB are valid Date objects
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      // Handle invalid dates here or skip items with invalid dates
      return 0; // No change in order
    }

    return dateB.getTime() - dateA.getTime(); // Sort in descending order
  });

  // Slice the first 3 items to get the most recent ones
  const recentArtikel = dataArtikel.slice(0, 3);

  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-900 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl pb-4">
        Artikel Kesehatan Puskesmas
      </div>

      <div className="container my-24 mx-auto md:px-6 ">
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {/* Main News List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
              {/* Your existing main news list code */}

              {dataArtikel.map((item) => (
                <div key={item.id_berita} className="mb-6">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex">
                      <div className="mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                        <Image
                          src={item.path_image}
                          width={2000}
                          height={2000}
                          className="w-full"
                          alt={`Image for ${item.nama}`}
                          // Make sure to provide alt text for accessibility
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
              {recentBerita.map((item) => (
                <Link
                  href={`/berita/${item.id_berita}`}
                  key={item.id_berita}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8 mx-4"
                >
                  <Image
                    src={item.path_image}
                    width={1000}
                    height={1000}
                    className="object-cover w-full px-3 py-3  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    alt={`Image for ${item.nama}`}
                  />
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
              {" "}
              {/* Center the cards */}
              {recentArtikel.map((item) => (
                <Link
                  href={`/berita/${item.id_berita}`}
                  key={item.id_berita}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8 mx-4"
                >
                  <Image
                    src={item.path_image}
                    width={1000}
                    height={1000}
                    className="object-cover w-full px-3 py-3  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    alt={`Image for ${item.nama}`}
                  />
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
