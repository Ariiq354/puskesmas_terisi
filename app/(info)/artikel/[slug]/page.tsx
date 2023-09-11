import React, { useEffect, useState } from "react";
import NewsContent from "@/components/newsContent";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import { formatDateToDDMMYYYY } from "@/lib/utils";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await prismadb.tb_berita_artikel.findFirst({
    where: {
      id_berita: parseInt(params.slug),
    },
  });

  return (
    <>
      <div className="container">
        <div className="overflow-hidden lg:px-40 py-10">
          <h2 className="text-3xl lg:text-5xl text-start font-semibold py-4">
            {data?.nama}
          </h2>
          <div className="text-gray-600 text-sm py-4">
            {data?.penulis} - {formatDateToDDMMYYYY(data?.created_at!)}
          </div>
          <Image
            width={2000}
            height={2000}
            src={data?.path_image!}
            alt="News"
            className="w-full object-cover"
          />

          <div className="text-gray-600 py-2 text-justify pt-10">
            <NewsContent data={data?.konten!} />
          </div>
        </div>
      </div>
    </>
  );
}
