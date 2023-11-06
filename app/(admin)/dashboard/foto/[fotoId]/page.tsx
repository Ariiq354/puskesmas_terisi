import prismadb from "@/lib/prismadb";
import { FotoForm } from "./components/foto-form";

const Dashboard = async ({ params }: { params: { fotoId: string } }) => {
  let fotoId = 0;

  if (params.fotoId !== "new") {
    fotoId = parseInt(params.fotoId);
  }

  const foto = await prismadb.tb_galeri.findUnique({
    where: {
      id: fotoId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <FotoForm initialData={foto} />
      </div>
    </div>
  );
};
export default Dashboard;
