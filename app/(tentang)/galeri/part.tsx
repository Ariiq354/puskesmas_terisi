"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

interface Props {
  code: string;
  name: string;
  type: number;
}

export default function Part({ code, name, type }: Props) {
  return (
    <>
      {type === 1 ? (
        <CldImage width={300} height={135} src={code} alt="image" />
      ) : (
        <iframe width={300} height={169} src={code}></iframe>
      )}
    </>
  );
}
