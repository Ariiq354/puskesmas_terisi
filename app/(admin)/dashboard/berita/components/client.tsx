"use client";

import { useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { BeritaColumn, columns } from "./column";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

interface BeritaClientProps {
  data: BeritaColumn[];
}

export const Client: React.FC<BeritaClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`News (${data.length})`} description={"Manage News"} />
        <Button onClick={() => router.push(`/dashboard/berita/new`)}>
          Add
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
