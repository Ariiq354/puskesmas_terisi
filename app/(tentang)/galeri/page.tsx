import Image from "next/image";
import React from "react";

export default function Galeri() {
  return (
    <>
      <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-emerald-900 bg-no-repeat bg-cover bg-center flex justify-center items-end text-white font-bold text-6xl pb-4">
        Galeri Puskesmas
      </div>
      <div className="container flex flex-wrap my-10">
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image src="/image/usg.jpeg" alt="Image" width={300} height={300} />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image
            src="/image/farmasi.jpeg"
            alt="Image"
            width={300}
            height={300}
          />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image
            src="/image/kesehatangigi.jpeg"
            alt="Image"
            width={300}
            height={300}
          />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image
            src="/image/observasi.jpeg"
            alt="Image"
            width={300}
            height={300}
          />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image src="/image/nifas.jpeg" alt="Image" width={300} height={300} />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image src="/image/foto2.jpeg" alt="Image" width={300} height={300} />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image src="/image/foto1.jpeg" alt="Image" width={300} height={300} />
        </div>
        <div className="h-auto rounded mx-auto cursor-pointer">
          <Image src="/image/lab.jpeg" alt="Image" width={300} height={300} />
        </div>
      </div>
    </>
  );
}
