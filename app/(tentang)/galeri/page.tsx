"use client";

import React, { useState, useEffect } from "react";
import Part from "./part";
import axios from "axios";
import { Button } from "@/components/ui/button";
import type { tb_galeri as galeri } from "@prisma/client";

export default function Galeri() {
  const [items, setItems] = useState<galeri[]>();
  const [state, setState] = useState(true);
  const [filtered, setFiltered] = useState<galeri[]>();

  useEffect(() => {
    axios.get("/api/galeri").then((res) => {
      setItems(res.data);
      const updatedItem = res.data?.filter((curItem: galeri) => {
        return curItem.type === 1;
      });
      setFiltered(updatedItem);
    });
  }, []);

  const handleState = () => {
    setState((state) => !state);
  };
  const filterItem = (typeItem: number) => {
    const updatedItem = items?.filter((curItem) => {
      return curItem.type === typeItem;
    });
    setFiltered(updatedItem);
  };

  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-500 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl pb-4">
        Galeri Puskesmas
      </div>
      <div className="flex justify-center my-4 gap-8">
        <Button
          disabled={state}
          onClick={() => {
            handleState(), filterItem(1);
          }}
          className="text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 disabled:bg-emerald-700 disabled:text-white disabled:opacity-100"
        >
          Gambar
        </Button>
        <Button
          disabled={!state}
          onClick={() => {
            handleState(), filterItem(2);
          }}
          className="text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 disabled:bg-emerald-700 disabled:text-white disabled:opacity-100"
        >
          Video
        </Button>
      </div>
      <div className="container flex flex-wrap my-10 max-w-7xl gap-4 justify-center">
        {filtered?.map((item) => (
          <Part
            key={item.id}
            code={item.code}
            name={item.name}
            type={item.type}
          />
        ))}
      </div>
    </>
  );
}
