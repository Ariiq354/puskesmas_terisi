import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";

export default function TentangKami() {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 items-center">
      <div className="flex flex-col gap-4">
        <div className="text-lg">Tentang Kami</div>
        <div className="text-4xl">UPTD Puskesmas Terisi</div>
        <div className="text-xl text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero
          obcaecati at itaque voluptatum enim commodi. Provident eum nostrum
          nulla neque. Incidunt ducimus laboriosam voluptatibus expedita,
          temporibus earum laudantium quibusdam!
        </div>
        <div>
          <Button className="flex group text-teal-700 border-[3px] py-5 px-2 font-bold border-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300">
            Selengkapnya
            <BiChevronRight
              size={30}
              className="text-white bg-teal-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-teal-700"
            />
          </Button>
        </div>
      </div>
      <div>
        <Image src="/about-img.svg" width={2500} height={2500} alt=""></Image>
      </div>
    </div>
  );
}
