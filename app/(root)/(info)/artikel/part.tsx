"use client";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import { formatDateToDDMMYYYY } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

interface Props {
  id_berita: number;
  nama: string;
  path_image: string;
  penulis: string;
  kategori: number;
  deskripsi: string;
  konten: string;
  created_at: Date;
  updated_at: Date;

}

export default function Part({ id_berita, nama, path_image, penulis, kategori, deskripsi, konten, created_at, updated_at }: Props) {
  return (
    <>
      {kategori === 1 ? (
        <div key={id_berita} className="flex flex-col justify-between">
        <div className="block rounded-lg h-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex">
            <div className="mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
              <Image
                src={path_image}
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
                {formatDateToDDMMYYYY(created_at)}
              </div>
              <div className="flex gap-2">
                <FaUserAlt />
                {penulis}
              </div>
            </div>
            <h5 className="mb-3 text-base font-bold cutoffNama">
              {nama}
            </h5>
            <p className="cutoff text-sm mb-3">{deskripsi}</p>
            <div>
              <Link href={`/artikel/${id_berita}`}>
                <Button className="flex group text-xs text-emerald-700 border-[3px] py-3 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
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
      ) : (
        console.log("Gada coy, ini buat 0")
      )}
    </>
  );
}
