"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash, View } from "lucide-react";
import { AlertModal } from "@/components/modal/alert-modal";
import { TestimoniColumn } from "./column";
import toast from "react-hot-toast";
import axios from "axios";
import { ViewModal } from "@/components/modal/view-modal";
import Image from "next/image";

interface TestimoniColumnProps {
  data: TestimoniColumn;
}

export const CellAction: React.FC<TestimoniColumnProps> = ({ data }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [foto, setFoto] = useState("");
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/testimoni`, {
        data: { id_testimoni: data.id_testimoni },
      });
      toast.success("Foto deleted.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const onCopy = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    toast.success("Testimoni ID copied to clipboard.");
  };

  const onView = (data: string, message: string) => {
    setViewOpen(true);
    setFoto(data);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <ViewModal
        title="Photo Viewer"
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
      >
        <div className="flex gap-4">
          <Image src={foto} alt="foto" width={500} height={500} />
        </div>
      </ViewModal>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id_testimoni)}>
            <Copy className="mr-2 h-4 w-4" /> Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              router.push(`/dashboard/testimoni/${data.id_testimoni}`)
            }
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onView(data.path_image, data.message)}
          >
            <View className="mr-2 h-4 w-4" /> View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
