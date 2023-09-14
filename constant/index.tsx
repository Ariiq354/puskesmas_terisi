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
  FaShieldVirus,
} from "react-icons/fa";
import { TbBabyCarriage } from "react-icons/tb";

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
      {
        href: "/bpjs",
        key: "Skrining BPJS Kesehatan",
        title: "Skrining BPJS Kesehatan",
      },
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
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Pelayanan Kesehatan Lansia",
    icon: <MdElderly></MdElderly>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Kesehatan Gigi dan Mulut",
    icon: <FaTooth></FaTooth>,
    jadwal: "Senin, Rabu, Jumat",
  },
  {
    name: "Pelayanan Kesehatan Peduli Remaja (PKPR)",
    icon: <FaPeopleCarry></FaPeopleCarry>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Manajemen Terpadu Balita Sakit",
    icon: <FaBaby></FaBaby>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Kesehatan Ibu dan Anak (KIA) dan KB",
    icon: <MdFamilyRestroom></MdFamilyRestroom>,
    jadwal: "Senin, Rabu, Jumat, Sabtu",
  },
  {
    name: "Pelayanan USG",
    icon: <BsSoundwave></BsSoundwave>,
    jadwal: "Kamis dan Sabtu",
  },
  {
    name: "Poli DOTS TBC",
    icon: <FaLungsVirus></FaLungsVirus>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Pemeriksaan IMS / HIV",
    icon: <BsVirus></BsVirus>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Laboratorium",
    icon: <BiSolidReport></BiSolidReport>,
    jadwal: "Senin, Selasa, Rabu, Jumat, Sabtu. Kamis buka di Pustu Karangasem",
  },
  {
    name: "Gawat Darurat",
    icon: <FaAmbulance></FaAmbulance>,
    jadwal: "24 Jam",
  },
  {
    name: "Persalinan (PONED)",
    icon: <TbBabyCarriage></TbBabyCarriage>,
    jadwal: "24 Jam",
  },
  {
    name: "Rawat Inap",
    icon: <FaBed></FaBed>,
    jadwal: "Setiap Hari",
  },
  {
    name: "Konseling",
    icon: <FaUserMd></FaUserMd>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "Dokmaru (Dokter Masuk Rumah)",
    icon: <FaHome></FaHome>,
    jadwal: "Senin s/d Sabtu",
  },
  {
    name: "PDP HIV AIDS",
    icon: <FaShieldVirus></FaShieldVirus>,
    jadwal: "Senin s/d Sabtu",
  },
];
