"use client";

import { useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { TestimoniColumn, columns } from "./column";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

interface TestimoniClientProps {
  data: TestimoniColumn[];
}

export const Client: React.FC<TestimoniClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Testimoni (${data.length})`}
          description={"Manage Testimoni"}
        />
        <Button onClick={() => router.push(`/dashboard/testimoni/new`)}>
          Add
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
