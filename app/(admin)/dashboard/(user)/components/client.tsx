"use client";

import { useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { UserColumn, columns } from "./column";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

interface UserClientProps {
  data: UserColumn[];
}

export const Client: React.FC<UserClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`User (${data.length})`} description={"Manage User"} />
        <Button onClick={() => router.push(`/dashboard/new`)}>Add</Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
