"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import axios from "axios";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Edit, Link, MoreHorizontal, Trash, View } from "lucide-react";
import { AlertModal } from "@/components/modal/alert-modal";
import { VideoColumn } from "./column";
import { ViewModal } from "@/components/modal/view-modal";

interface VideoColumnProps {
  data: VideoColumn;
}

export const CellAction: React.FC<VideoColumnProps> = ({ data }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/video`, { data: { id: data.id } });
      toast.success("Video deleted.");
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
    toast.success("Video ID copied to clipboard.");
  };

  const onLinkCopy = (id: string) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]{11})/;
    const match = id.match(regex);
    const videoId = match![1];
    const normalLink = `https://www.youtube.com/watch?v=${videoId}`;
    navigator.clipboard.writeText(normalLink);
    toast.success("Video Link copied to clipboard.");
  };

  const onView = (data: string) => {
    setViewOpen(true);
    setVideo(data);
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
        title="Video Viewer"
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
      >
        <iframe src={video} width={450} height={253} />
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
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" /> Copy ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLinkCopy(data.code)}>
            <Link className="mr-2 h-4 w-4" /> Copy Youtube Link
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/video/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onView(data.code)}>
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
