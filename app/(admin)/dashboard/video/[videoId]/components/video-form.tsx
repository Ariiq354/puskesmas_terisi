"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2, Trash } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/modal/alert-modal";
import VideoUpload from "@/components/ui/video-upload";

const formSchema = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
});

type VideoFormValue = z.infer<typeof formSchema>;

interface VideoFormProps {
  initialData: { id: number; code: string; name: string } | null;
}

export const VideoForm: React.FC<VideoFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Video" : "Create Video";
  const description = initialData ? "Edit a Video." : "Add a new Video";
  const toastMessage = initialData ? "Video updated." : "Video created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<VideoFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      code: "",
      name: "",
    },
  });

  const onSubmit = async (data: VideoFormValue) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/video`, {
          ...data,
          id: initialData.id,
        });
      } else {
        await axios.post(`/api/video`, { ...data, type: 2 });
      }
      router.refresh();
      router.push(`/dashboard/video`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/video`, { data: { id: initialData?.id } });
      router.refresh();
      router.push(`/dashboard/video`);
      toast.success("Photo deleted.");
    } catch (error: any) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Link</FormLabel>
                <FormControl>
                  <VideoUpload
                    value={field.value ? field.value : ""}
                    onChange={(url) => field.onChange(url)}
                  ></VideoUpload>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter photo name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <Button disabled={loading} type="submit">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
