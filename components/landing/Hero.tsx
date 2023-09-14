import React from "react";
import Image from "next/image";
import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Hero() {
  return (
    <>
      <div className="h-[40rem] flex items-center mb-[5rem] z-0 mt-28 lg:mt-0">
        <div className="w-full h-fullflex items-center">
          <div className="container grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="flex flex-col gap-4">
              <div className="text-2xl text-emerald-700">SELAMAT DATANG DI</div>
              <div className="text-4xl lg:text-6xl text-emerald-700">
                UPTD PUSKESMAS TERISI
              </div>
              <div className="text-2xl text-justify">
                Portal informasi, Data, Edukasi dan Umpan balik Terisi
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="bg-emerald-400 text-white p-4 flex flex-col gap-4 rounded-lg items-center my-5 lg:my-0">
                  <div className="text-sm lg:text-lg flex justify-between items-center">
                    <div>Layanan Call Center 24 Jam</div>
                    <div>
                      <Link href="https://wa.me/6282118894770" target="_blank">
                        <Image
                          src="/whatsapp.png"
                          width={30}
                          height={30}
                          alt=""
                          className="ml-3"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div>
                Jam Pelayanan :<br />
                Senin s/d Kamis : 7.30 - 13.30 <br />
                Jum&apos;at : 7.30 - 11.00 <br />
                Sabtu : 7.30 - 11.30
              </div> */}
                <div className="flex gap-3 items-center md:flex-row flex-col justify-center">
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
            <div className="mt-3 lg:mt-0">
              <Image
                src="/test-gif.gif"
                width={2500}
                height={2500}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="relative container">
        <div className="flex flex-col gap-4 mt-4 lg:absolute translate-y-[-80px] lg:translate-y-[-250px]">
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
