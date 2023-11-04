import React from "react";
import Link from "next/link";

import { formatDateToDDMMYYYY } from "@/lib/utils";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

export const dynamic = "force-dynamic";

export default async function Berita() {
  const dataBerita = await prismadb.tb_berita_artikel.findMany({
    where: {
      kategori: 0,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Berita Puskesmas
      </div>
      <div className="container my-12">
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {dataBerita?.map((item) => (
            <div key={item.id_berita} className="flex flex-col justify-between">
              <div className="block rounded-lg h-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div className="mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
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
                  <div className="mb-3 text-neutral-500 dark:text-neutral-300 text-sm">
                    <div className="flex gap-2">
                      <FaCalendarAlt />
                      {formatDateToDDMMYYYY(item.created_at)}
                    </div>
                    <div className="flex gap-2">
                      <FaUserAlt />
                      {item.penulis}
                    </div>
                  </div>
                  <h5 className="mb-3 text-base font-bold cutoffNama">
                    {item.nama}
                  </h5>
                  <p className="cutoff text-sm mb-3">{item.deskripsi}</p>
                  <div>
                    <Link href={`/berita/${item.id_berita}`}>
                      <Button
                        variant={"outline"}
                        className="flex group text-xs text-emerald-700 border-[3px] py-3 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300"
                      >
                        Selengkapnya
                        <BiChevronRight
                          size={25}
                          className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
