"use client";
import Image from "next/image";
import React from "react";

interface Props {
  code: string;
  name: string;
  type: number;
  deskripsi: string;
  handleClick: (path: string, nama: string, konten: string) => void;
}

export default function Part({
  code,
  name,
  type,
  handleClick,
  deskripsi,
}: Props) {
  return (
    <>
      {type === 1 ? (
        <Image
          width={300}
          height={135}
          src={code}
          alt="image"
          onClick={() => handleClick(code, name, deskripsi)}
        />
      ) : (
        <div className="flex flex-col gap-2 w-80">
          <iframe src={code} allowFullScreen={true}></iframe>
          <div className="cutoffNama">{name}</div>
        </div>
      )}
    </>
  );
}
