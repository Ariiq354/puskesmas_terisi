import prismadb from "@/lib/prismadb";
import { BeritaForm } from "./components/berita-form";

const Dashboard = async ({ params }: { params: { beritaId: string } }) => {
  let beritaId = 0;

  if (params.beritaId !== "new") {
    beritaId = parseInt(params.beritaId);
  }

  const berita = await prismadb.tb_berita_artikel.findUnique({
    where: {
      id_berita: beritaId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BeritaForm initialData={berita} />
      </div>
    </div>
  );
};
export default Dashboard;
