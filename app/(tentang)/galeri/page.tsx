"use client";

import React, { useState, useEffect } from "react";
import Part from "./part";
import axios from "axios";

interface galeri {
  id: number;
  code: string;
  name: string;
  type: number;
  created_at: Date;
  updated_at: Date;
}

export default function Galeri() {
  const [items, setItems] = useState<galeri[]>();

  useEffect(() => {
    axios.get("/api/galeri").then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-900 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl pb-4">
        Galeri Puskesmas
      </div>
      <div className="container flex flex-wrap my-10 max-w-7xl gap-4 justify-center">
        {items?.map((item) => (
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
