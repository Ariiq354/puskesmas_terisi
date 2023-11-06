"use client";

import { useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { VideoColumn, columns } from "./column";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

interface VideoClientProps {
  data: VideoColumn[];
}

export const Client: React.FC<VideoClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Video (${data.length})`}
          description={"Manage Video"}
        />
        <Button onClick={() => router.push(`/dashboard/video/new`)}>Add</Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  );
};
