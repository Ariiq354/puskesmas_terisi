import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatDateToDDMMYYYY } from "@/lib/utils";

import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Artikel() {
  const data = await prismadb.tb_berita_artikel.findMany({
    orderBy: { created_at: "desc" },
    take: 3,
  });

  return (
    <div className="container mb-8">
      <div className="text-bold text-center text-6xl mb-4">
        Berita & Artikel Terkini
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.map((item) => (
          <div
            key={item.id_berita}
            className="flex flex-col gap-2 border-4 border-emerald-600 items-center bg-white shadow-md p-6  text-emerald-700"
          >
            <div className="w-full">
              <Image
                src={item.path_image}
                width={500}
                height={500}
                className="w-full"
                alt=""
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-1 items-center text-sm">
                <FaCalendar /> {formatDateToDDMMYYYY(item.created_at)}
              </div>
              <div className="flex gap-1 items-center text-sm">
                <FaUserAlt /> {item.penulis}
              </div>
            </div>
            <div className="font-bold text-3xl w-full my-2 cutoffNama">
              {item.nama}
            </div>
            <div className="text-justify cutoff">{item.deskripsi}</div>
            <div className="flex w-full mt-2">
              <Link href={`/berita/${item.id_berita}`}>
                <Button
                  variant={"outline"}
                  className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300"
                >
                  Selengkapnya
                  <BiChevronRight
                    size={30}
                    className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
                  />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
