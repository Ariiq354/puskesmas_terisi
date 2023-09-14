import React from "react";
import NewsContent from "@/components/newsContent";
import { formatDateToDDMMYYYY } from "@/lib/utils";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import RecentComponent from "@/components/RecentComponent";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await prismadb.tb_berita_artikel.findFirst({
    where: {
      id_berita: parseInt(params.slug),
    },
  });

  return (
    <>
      <div className="container grid my-10 lg:grid-cols-6 grid-cols-1 gap-4">
        <div className="overflow-hidden lg:col-span-4">
          <Image
            width={1000}
            height={1000}
            src={data?.path_image!}
            alt="News"
            className="w-full object-cover"
          />
          <h2 className="text-xl lg:text-3xl text-start font-semibold py-4">
            {data?.nama}
          </h2>
          <div className="text-gray-600 text-sm ">
            {data?.penulis} - {formatDateToDDMMYYYY(data?.created_at!)}
          </div>

          {/* Content */}
          <div className="text-gray-600 py-2 text-justify pt-10">
            <NewsContent data={data?.konten!} />
          </div>
        </div>
        <RecentComponent className="lg:col-span-2" />
      </div>
    </>
  );
}
