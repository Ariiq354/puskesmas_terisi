"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2, Trash } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";

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
import ImageUpload from "@/components/ui/image-upload";
import { tb_berita_artikel } from "@prisma/client";

const formSchema = z.object({
  nama: z.string().min(1),
  path_image: z.string().min(1),
  penulis: z.string().min(1),
  deskripsi: z.string().min(1),
  konten: z.string().min(1),
});

type ArtikelFormValue = z.infer<typeof formSchema>;

interface ArtikelFormProps {
  initialData: tb_berita_artikel | null;
}

export const ArtikelForm: React.FC<ArtikelFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Article" : "Create Article";
  const description = initialData ? "Edit a Article." : "Add a new Article";
  const toastMessage = initialData ? "Article updated." : "Article created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<ArtikelFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      nama: "",
      path_image: "",
      penulis: "",
      deskripsi: "",
      konten: "",
    },
  });

  const onSubmit = async (data: ArtikelFormValue) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/artikel`, {
          ...data,
          id_berita: initialData.id_berita,
        });
      } else {
        await axios.post(`/api/artikel`, { ...data, kategori: 1 });
      }
      router.refresh();
      router.push(`/dashboard/artikel`);
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
      await axios.delete(`/api/artikel`, {
        data: { id: initialData?.id_berita },
      });
      router.refresh();
      router.push(`/dashboard/artikel`);
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
            name="path_image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  ></ImageUpload>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter article name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deskripsi"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Deskripsi</FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="penulis"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Penulis</FormLabel>
                <FormControl>
                  <Input placeholder="Enter penulis" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="konten"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Konten</FormLabel>
                <FormControl>
                  <Editor
                    value={field.value}
                    onEditorChange={(content) => {
                      field.onChange(content);
                    }}
                    apiKey="b8avm8cdyus629i1zfez6tb5jr8zyfgp3bii4ntt6fqyz7oe"
                    init={{
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "wordcount",
                        "help",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    }}
                  />
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
