import prismadb from "@/lib/prismadb";
import { formatDateToDDMMYYYY } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className: string;
}

export default async function RecentComponent({ className }: Props) {
  const dataBerita = await prismadb.tb_berita_artikel.findMany({
    where: { kategori: 0 },
    orderBy: { created_at: "desc" },
    take: 3,
  });

  const dataArtikel = await prismadb.tb_berita_artikel.findMany({
    where: { kategori: 1 },
    orderBy: { created_at: "desc" },
    take: 3,
  });

  return (
    <div className={className}>
      <div className="flex flex-col w-full bg-emerald-100 p-4 gap-8">
        <div className="p-2 border-l-2 border-emerald-500 text-emerald-700 font-extrabold">
          Berita Terkini
        </div>
        {dataBerita.map((item) => (
          <div key={item.id_berita} className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <Image
                src={item.path_image}
                width={500}
                height={500}
                alt=""
                className="w-full"
              ></Image>
            </div>
            <div className="flex flex-col col-span-2">
              <Link href={`/berita/${item.id_berita}`}>
                <div className="font-bold hover:text-emerald-500">
                  {item.nama}
                </div>
              </Link>
              <div className="text-emerald-700 text-sm">
                {formatDateToDDMMYYYY(item.created_at)}
              </div>
            </div>
          </div>
        ))}
        <div className="p-2 border-l-2 border-emerald-500 text-emerald-700 font-extrabold">
          Artikel Terkini
        </div>
        {dataArtikel.map((item) => (
          <div key={item.id_berita} className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <Image
                src={item.path_image}
                width={500}
                height={500}
                alt=""
                className="w-full"
              ></Image>
            </div>
            <div className="flex flex-col col-span-2">
              <Link href={`/artikel/${item.id_berita}`}>
                <div className="font-bold hover:text-emerald-500">
                  {item.nama}
                </div>
              </Link>
              <div className="text-emerald-700 text-sm">
                {formatDateToDDMMYYYY(item.created_at)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
