import React from "react";
import Image from "next/image";
import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Hero() {
  return (
    <>
      <div className="md:h-[40rem]">
        <div className="w-full h-full md:flex md:items-center">
          <div className="container grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="flex flex-col gap-4 md:text-left text-center mt-8">
              <div className="text-lg text-emerald-900 font-bold">
                SELAMAT DATANG DI
              </div>
              <div className="flex justify-center md:block">
                <Image
                  src={"/singkatan.png"}
                  width={500}
                  height={500}
                  className="w-48"
                  alt=""
                />
              </div>
              <div className="text-xl font-bold [text-shadow:_-10px_5px_10px_rgba(0,_0,_0,_0.35)]">
                SITUS WEB DATA INFORMASI, EDUKASI DAN UMPAN BALIK PUSKESMAS
                TERISI
              </div>
              <div className="flex flex-wrap gap-2 md:justify-normal justify-center">
                <div className="bg-emerald-400 text-white p-4 flex flex-col gap-4 rounded-lg items-center my-5 lg:my-0">
                  <Link href="https://wa.me/6285171110351" target="_blank">
                    <div className="text-sm lg:text-lg flex justify-between items-center">
                      <div>Layanan Call Center 24 Jam</div>
                      <div>
                        <Image
                          src="/whatsapp.png"
                          width={30}
                          height={30}
                          alt=""
                          className="ml-3"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex gap-3 items-center flex-row justify-center">
                  <Dialog>
                    <DialogTrigger className="bg-emerald-500 border-white border-2 rounded-full p-1 text-white md:ml-6">
                      <AiFillPlayCircle size={40} />
                    </DialogTrigger>
                    <div>Tonton Kami</div>
                    <DialogContent className="w-[64vw] md:h-[36vw]">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/9qQwK_KDH_0?si=Wl2Tbgmz_YOy3fTq"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/test-gif.gif"
                width={2500}
                height={2500}
                alt=""
                unoptimized={true}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:absolute lg:translate-y-[-80px]">
          <div className="bg-emerald-400 text-white flex-col flex p-12 font-bold rounded-lg">
            <div className="font-bold mb-4 text-2xl">Jam Pelayanan</div>
            <div className="flex gap-1 justify-between border-white border-b-2 text-lg">
              <div>Senin – Kamis</div>
              <div>07.30 -13.30 WIB</div>
            </div>
            <div className="flex justify-between border-white border-b-2 text-lg">
              <div>Jumat</div>
              <div>07.30 -11.00 WIB</div>
            </div>
            <div className="flex justify-between border-white text-lg">
              <div>Sabtu</div>
              <div>07.30 -11.30 WIB</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
