"use client";
import Image from "next/image";
import React from "react";

interface Props {
  code: string;
  name: string;
  type: number;
}

export default function Part({ code, name, type }: Props) {
  return (
    <>
      {type === 1 ? (
        <Image width={300} height={135} src={code} alt="image" />
      ) : (
        <iframe width={300} height={169} src={code}></iframe>
      )}
    </>
  );
}
