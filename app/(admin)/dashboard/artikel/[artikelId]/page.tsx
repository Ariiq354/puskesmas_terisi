import prismadb from "@/lib/prismadb";
import { ArtikelForm } from "./components/article-form";

const Dashboard = async ({ params }: { params: { artikelId: string } }) => {
  let artikelId = 0;

  if (params.artikelId !== "new") {
    artikelId = parseInt(params.artikelId);
  }

  const artikel = await prismadb.tb_berita_artikel.findUnique({
    where: {
      id_berita: artikelId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ArtikelForm initialData={artikel} />
      </div>
    </div>
  );
};
export default Dashboard;
