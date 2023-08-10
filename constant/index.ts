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
