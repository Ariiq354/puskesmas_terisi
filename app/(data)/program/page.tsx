import React from "react";
import { Button } from "@/components/ui/button";
import { BiChevronRight } from "react-icons/bi";

export default function Program() {
    return (
        <>
            <div className="h-[15rem] w-full bg-[url('/hero-bg.png')] bg-teal-800 bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-bold text-6xl text-center">
                Laporan Program
            </div>
            <div className="container flex items-center py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-4xl font-semibold mb-2">Program Upaya <br /> Kesehatan Perseorangan <br /> (UKP)</h2>
                        <p className="text-xl text-justify py-7">
                            UPTD Puskesmas Terisi memiliki Program Upaya Kesehatan Perseorangan (UKP) yaitu suatu kegiatan dan atau serangkaian kegiatan pelayanan kesehatan yang ditujukan untuk peningkatan, pencegahan, penyembuhan penyakit, pengurangan penderitaan akibat penyakit dan memulihkan kesehatan perseorangan. UKP tersebut terdiri dari Pelayanan  Pendaftaran dan Rekam Medis, Pelayanan Pemeriksaan Umum, Pelayanan MTBS, Pelayanan  Kesehatan Gigi dan Mulut, Pelayanan KIA/KB, Pelayanan Laboratorium, Pelayanan Farmasi, Pelayanan TB.
                            <br /><br />
                            Untuk mengupload laporan bulanan silakan klik link dibawah ini :
                        </p>
                        <div className="flex w-full mt-2">
                            <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
                                Laporan - UKP
                                <BiChevronRight
                                    size={30}
                                    className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
                                />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-semibold mb-2">Program Upaya <br /> Kesehatan Masyarakat <br /> (UKM)</h2>
                        <p className="text-xl text-justify py-7">
                            UPTD Puskesmas Terisi memiliki Upaya Kesehatan Masyarakat (UKM) yang merupakan setiap kegiatan untuk memelihara dan meningkatkan kesehatan serta mencegah dan menanggulangi timbulnya masalah kesehatan dengan sasaran keluarga, kelompok, dan masyarakat.
                            <br /><br />
                            Untuk mengupload laporan bulanan silakan klik link dibawah ini :
                        </p>
                        <div className="flex w-full mt-2">
                            <Button className="flex group text-emerald-700 border-[3px] py-5 px-2 font-bold border-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300">
                                Laporan - UKM
                                <BiChevronRight
                                    size={30}
                                    className="text-white bg-emerald-700 rounded-sm ml-2 group-hover:ml-4 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
