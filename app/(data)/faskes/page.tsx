import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";

export default function Faskes() {
    return (
        <>
            <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-teal-800 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-6xl text-center">
                Laporan Faskes Jejaring
            </div>
            <div className="container flex items-center py-20">
                <div>
                    <h2 className="text-4xl font-semibold mb-2">Fasilitas Pelayanan Kesehatan Jejaring</h2>
                    <h2 className="text-4xl pt-7">UPTD Puskesmas Babakan Sari</h2>
                    <p className="text-xl text-justify py-7">
                        UPTD Puskesmas Babakan Sari memiliki fasilitas kesehatan jejaring yang tersebar di wilayah Kerja Puskesmas Babakan Sari yaitu Kelurahan Babakan Sari, Kelurahan Kebon Jayanti, Kelurahan Sukapura dan Kelurahan Kebon Kangkung. Fasilitas Kesehatan Jejaring Puskesmas Babakan Sari Rumah Sakit Pindad, Klinik Utama, Klinik Pratama serta Dokter Praktek dan Bidan Praktek Mandiri.
                        <br /><br />
                        Untuk mengupload laporan bulanan fasilitas kesehatan jejaring silakan klik link dibawah ini :
                    </p>
                    <div className="flex w-full mt-2">
                        <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
                            Laporan - Fasyankes
                            <BiChevronRight
                                size={30}
                                className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
