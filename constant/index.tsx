import { BiClinic, BiSolidReport } from "react-icons/bi";
import { BsSoundwave, BsVirus } from "react-icons/bs";
import { MdElderly, MdFamilyRestroom, MdReport } from "react-icons/md";
import {
  FaTooth,
  FaPeopleCarry,
  FaBaby,
  FaLungsVirus,
  FaAmbulance,
  FaBed,
  FaUserMd,
  FaHome,
} from "react-icons/fa";
import { TbBabyCarriage } from "react-icons/tb";
import { GrBaby } from "react-icons/gr";

export const NavLinks = [
  { href: "/", key: "Beranda", title: "Beranda" },
  {
    key: "Tentang Puskesmas",
    title: "Tentang Puskesmas",
    subMenus: [
      { href: "/profil", key: "Profil Puskesmas", title: "Profil Puskesmas" },
      {
        href: "/inovasi",
        key: "Inovasi Puskesmas",
        title: "Inovasi Puskesmas",
      },
      { href: "/berita", key: "Berita Puskesmas", title: "Berita Puskesmas" },
      { href: "/galeri", key: "Galeri Puskesmas", title: "Galeri Puskesmas" },
    ],
  },
  {
    key: "Info Kesehatan",
    title: "Info Kesehatan",
    subMenus: [
      {
        href: "/artikel",
        key: "Artikel Kesehatan",
        title: "Artikel Kesehatan",
      },
      {
        href: "/skrining",
        key: "Skrining Kesehatan Jiwa",
        title: "Skrining Kesehatan Jiwa",
      },
    ],
  },
  {
    key: "Data",
    title: "Data",
    subMenus: [
      { href: "/program", key: "Laporan Program", title: "Laporan Program" },
      {
        href: "/faskes",
        key: "Laporan Faskes Jejaring",
        title: "Laporan Faskes Jejaring",
      },
      { href: "/capaian", key: "Capaian Program", title: "Capaian Program" },
    ],
  },
  {
    key: "Survei",
    title: "Survei",
    subMenus: [
      {
        href: "/ikm",
        key: "Survei Indeks Kepuasan Masyarakat",
        title: "Survei Indeks Kepuasan Masyarakat (IKM)",
      },
      {
        href: "/smd",
        key: "Survei Mawas Diri",
        title: "Survei Mawas Diri (SMD)",
      },
    ],
  },
  { href: "/saran", key: "Saran dan Keluhan", title: "Saran dan Keluhan" },
];

export const pelayanan = [
  {
    name: "Klinik Umum",
    icon: <BiClinic></BiClinic>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Pelayanan Kesehatan Lansia",
    icon: <MdElderly></MdElderly>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Kesehatan Gigi dan Mulut",
    icon: <FaTooth></FaTooth>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Pelayanan Kesehatan Peduli Remaja (PKPR)",
    icon: <FaPeopleCarry></FaPeopleCarry>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Manajemen Terpadu Balita Sakit",
    icon: <FaBaby></FaBaby>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Kesehatan Ibu dan Anak (KIA) dan KB",
    icon: <MdFamilyRestroom></MdFamilyRestroom>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Pelayanan USG",
    icon: <BsSoundwave></BsSoundwave>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Poli DOTS TBC",
    icon: <FaLungsVirus></FaLungsVirus>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Pemeriksaan IMS / HIV",
    icon: <BsVirus></BsVirus>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Laboratorium",
    icon: <BiSolidReport></BiSolidReport>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Gawat Darurat 24 Jam",
    icon: <FaAmbulance></FaAmbulance>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Persalinan (PONED) 24 Jam",
    icon: <TbBabyCarriage></TbBabyCarriage>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Rawat Inap",
    icon: <FaBed></FaBed>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Konseling",
    icon: <FaUserMd></FaUserMd>,
    jadwal: "Senin - Selasa",
  },
  {
    name: "Dokmaru (Dokter Masuk Rumah)",
    icon: <FaHome></FaHome>,
    jadwal: "Senin - Selasa",
  },
];
