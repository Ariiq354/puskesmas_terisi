"use client";

import { useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { FotoColumn, columns } from "./column";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

interface FotoClientProps {
  data: FotoColumn[];
}

export const Client: React.FC<FotoClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Photo (${data.length})`}
          description={"Manage Photo"}
        />
        <Button onClick={() => router.push(`/dashboard/foto/new`)}>Add</Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
