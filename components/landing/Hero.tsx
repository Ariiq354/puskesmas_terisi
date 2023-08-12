import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[50rem] bg-[url('/hero-bg.png')] bg-teal-800 bg-no-repeat bg-cover flex items-center text-white mb-[-5rem]">
      <div className="container grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="flex flex-col gap-4">
          <div className="before relative pl-20 text-lg">Selamat Datang di</div>
          <div className="text-6xl">UPTD Puskesmas Terisi</div>
          <div className="text-xl text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero
            obcaecati at itaque voluptatum enim commodi. Provident eum nostrum
            nulla neque. Incidunt ducimus laboriosam voluptatibus expedita,
            temporibus earum laudantium quibusdam!
          </div>
        </div>
        <div>
          <Image src="/home-img.svg" width={2500} height={2500} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
