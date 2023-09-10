"use client";

import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import NewsContent from "@/components/newsContent";
import axios from "axios";

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

export default function Page({ params }: { params: { slug: string } }) {
  const [dataBerita, setDataBerita] = useState<berita[]>();

  useEffect(() => {
    axios.get(`/api/berita/${params.slug}`).then((res) => {
      setDataBerita(res.data);
    });
  }, [params.slug]);

  function formatDateToDDMMYYYY(dateString: string | number | Date) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      {dataBerita?.map((item) => (
        <div key={item.id_berita} className="container">
          <div className="overflow-hidden lg:px-40 py-10">
            {/* Title */}
            <h2 className="text-3xl lg:text-5xl text-start font-semibold py-4">
              {item.nama}
            </h2>

            {/* Author and Date */}
            <div className="text-gray-600 text-sm py-4">
              {item.penulis} - {formatDateToDDMMYYYY(item.created_at)}
            </div>

            {/* Image */}
            <CldImage
              width={2000}
              height={2000}
              src={item.path_image}
              alt="News"
              className="w-full object-cover"
            />

            {/* Content */}
            <div className="text-gray-600 py-2 text-justify pt-10">
              <NewsContent data={item.konten} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
