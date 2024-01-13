import prismadb from "@/lib/prismadb";
import { Client } from "./components/client";

export const revalidate = 0;

export default async function Dashboard() {
  const data = await prismadb.tb_testimoni.findMany({});

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Client data={data} />
      </div>
    </div>
  );
}
