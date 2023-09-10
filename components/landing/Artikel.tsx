"use client";

import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";
import Link from "next/link";

interface berita {
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

function formatDateToDDMMYYYY(dateString: string | number | Date) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function Artikel() {
  const [data, setData] = useState<berita[]>();

  useEffect(() => {
    axios.get("/api/allBerita").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container mb-8">
      <div className="text-bold text-center text-6xl text-emerald-700 mb-4">
        Artikel Terkini
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.map((item) => (
          <div
            key={item.id_berita}
            className="flex flex-col gap-2 border-4 border-emerald-600 items-center bg-white shadow-md p-6  text-emerald-700"
          >
            <div className="w-full">
              <CldImage
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
            <div className="font-bold text-3xl w-full my-2">{item.nama}</div>
            <div className="text-justify">{item.deskripsi}</div>
            <div className="flex w-full mt-2">
              <Link href={`/berita/${item.id_berita}`}>
                <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
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
