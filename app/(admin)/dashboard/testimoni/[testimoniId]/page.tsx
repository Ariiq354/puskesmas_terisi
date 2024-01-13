import prismadb from "@/lib/prismadb";
import { TestimoniForm } from "./components/testimoni-form";

const Dashboard = async ({ params }: { params: { testimoniId: string } }) => {
  let testimoniId = 0;

  if (params.testimoniId !== "new") {
    testimoniId = parseInt(params.testimoniId);
  }

  const testimoni = await prismadb.tb_testimoni.findUnique({
    where: {
      id_testimoni: testimoniId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <TestimoniForm initialData={testimoni} />
      </div>
    </div>
  );
};
export default Dashboard;
