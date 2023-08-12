import Pelayanan from "@/components/landing/Pelayanan";
import TentangKami from "@/components/landing/TentangKami";
import Hero from "@/components/landing/hero";
import Statistik from "@/components/landing/statistik";
import Artikel from "@/components/landing/Artikel";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistik />
      <TentangKami />
      <Pelayanan />
      <Artikel />
    </>
  );
}
