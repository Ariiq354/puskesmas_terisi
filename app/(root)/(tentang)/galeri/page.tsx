"use client";

import React, { useState, useEffect } from "react";
import Part from "./part";
import axios from "axios";
import { Button } from "@/components/ui/button";
import type { tb_galeri as galeri } from "@prisma/client";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ViewModal } from "@/components/modal/view-modal";
import Image from "next/image";

export default function Galeri() {
  const [items, setItems] = useState<galeri[]>();
  const [state, setState] = useState(true);

  const [viewOpenImage, setViewOpenImage] = useState(false);
  const [foto, setFoto] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("/api/galeri?type=1").then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleState = () => {
    setState((state) => !state);
    if (state === true) {
      axios.get("/api/galeri?type=2").then((res) => {
        setItems(res.data);
      });
      setCurrentPage(1);
    } else {
      axios.get("/api/galeri?type=1").then((res) => {
        setItems(res.data);
      });
      setCurrentPage(1);
    }
  };

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = items?.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(items?.length! / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onViewImage = (data: string, title: string, description: string) => {
    setViewOpenImage(true);
    setFoto(data);
    setTitle(title);
    setDeskripsi(description);
  };

  return (
    <>
      <ViewModal
        title={title}
        description={deskripsi}
        isOpen={viewOpenImage}
        onClose={() => setViewOpenImage(false)}
      >
        <Image src={foto} alt="foto" width={500} height={500} />
      </ViewModal>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.webp')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-4xl lg:text-6xl text-center">
        Galeri Puskesmas
      </div>
      <div className="flex justify-center my-4 gap-4">
        <Button
          variant={"outline"}
          disabled={state}
          onClick={() => {
            handleState();
          }}
          className="text-emerald-700 w-20 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 disabled:bg-emerald-700 disabled:text-white disabled:opacity-100"
        >
          Gambar
        </Button>
        <Button
          variant={"outline"}
          disabled={!state}
          onClick={() => {
            handleState();
          }}
          className="text-emerald-700 w-20 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 disabled:bg-emerald-700 disabled:text-white disabled:opacity-100"
        >
          Video
        </Button>
      </div>
      <div className="container flex flex-wrap my-10 max-w-7xl gap-4 justify-center">
        {currentData?.map((item) => (
          <Part
            key={item.id}
            code={item.code}
            name={item.name}
            type={item.type}
            deskripsi={item.konten}
            handleClick={onViewImage}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mb-4">
        <Button
          variant={"outline"}
          className="text-emerald-700 rounded-none border-l-[1px] border-y-[1px] p-3 font-bold border-emerald-300 hover:bg-emerald-300 hover:text-white transition-all duration-300  disabled:opacity-100"
          onClick={() => {
            handlePreviousPage();
          }}
          disabled={currentPage === 1}
        >
          <BsChevronLeft />
        </Button>
        {Array.from(
          { length: Math.ceil(items?.length! / itemsPerPage) },
          (_, i) => (
            <Button
              variant={"outline"}
              className="text-emerald-700 border-l-[1px] rounded-none border-y-[1px] font-bold border-emerald-300 hover:bg-emerald-300 hover:text-white transition-all duration-300 disabled:bg-emerald-300 disabled:text-white disabled:opacity-100"
              key={i}
              disabled={currentPage === i + 1}
              onClick={() => {
                handlePageChange(i + 1);
              }}
            >
              {i + 1}
            </Button>
          )
        )}
        <Button
          variant={"outline"}
          className="text-emerald-700 rounded-none border-[1px]  p-3 font-bold border-emerald-300 hover:bg-emerald-300 hover:text-white transition-all duration-300 disabled:opacity-100"
          onClick={() => {
            handleNextPage();
          }}
          disabled={currentPage === Math.ceil(items?.length! / itemsPerPage)}
        >
          <BsChevronRight />
        </Button>
      </div>
    </>
  );
}
