"use client";

import { useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { ArtikelColumn, columns } from "./column";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

interface ArtikelClientProps {
  data: ArtikelColumn[];
}

export const Client: React.FC<ArtikelClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Article (${data.length})`}
          description={"Manage Article"}
        />
        <Button onClick={() => router.push(`/dashboard/artikel/new`)}>
          Add
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
