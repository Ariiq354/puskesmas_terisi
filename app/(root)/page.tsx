import Pelayanan from "@/components/landing/Pelayanan";
import TentangKami from "@/components/landing/TentangKami";
import Hero from "@/components/landing/Hero";
import Artikel from "@/components/landing/Artikel";

export default function Home() {
  return (
    <>
      <Hero />
      <TentangKami />
      <Pelayanan />
      <Artikel />
    </>
  );
}
