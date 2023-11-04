import prismadb from "@/lib/prismadb";
import { Client } from "./components/client";

export default async function Dashboard() {
  const data = await prismadb.tb_berita_artikel.findMany({
    where: {
      kategori: 1,
    },
    select: {
      id_berita: true,
      nama: true,
      penulis: true,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Client data={data} />
      </div>
    </div>
  );
}
