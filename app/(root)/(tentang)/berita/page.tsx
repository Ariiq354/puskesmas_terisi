'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import type { tb_berita_artikel as berita } from "@prisma/client";
import Part from "./part";

export const dynamic = "force-dynamic";

export default function Berita() {
  const [items, setItems] = useState<berita[]>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("/api/berita?kategori=0").then((res) => {
      setItems(res.data);
    });
  }, []);


  const filteredItems = items?.filter(item => {
    const queryLower = query.toLowerCase()
    return (
      item.nama.toLowerCase().includes(query.toLowerCase()) ||
      item.konten.toLowerCase().includes(queryLower) ||
      item.deskripsi.toLowerCase().includes(queryLower) ||
      item.penulis.toLowerCase().includes(queryLower)
    )
  })

  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Berita Puskesmas
      </div>

      <div className="container my-12">

      <div className="container my-10">  
          <form>   
            <label htmlFor="q" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input
            type="text"
            id="q"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search" required />
            </div>
          </form>
        </div>


        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {(filteredItems ?? []).length > 0 ? (
            (filteredItems ?? []).map((item) => (
              <Part
                key={item.id_berita}
                id_berita={item.id_berita}
                nama={item.nama}
                path_image={item.path_image}
                penulis={item.penulis}
                kategori={item.kategori}
                deskripsi={item.deskripsi}
                konten={item.konten}
                created_at={item.created_at}
                updated_at={item.created_at}
              />
            ))
          ) : (
            <div className="lg:col-span-4 md:col-span-2 text-center my-10 text-lg">
              Tidak ada hasil yang sesuai.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
