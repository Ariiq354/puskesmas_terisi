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
import ImageUpload from "@/components/ui/image-upload";
import { tb_galeri, tb_testimoni } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  path_image: z.string().min(1),
  nama: z.string().min(1),
  message: z.string().min(1),
});

type TestimoniFormValue = z.infer<typeof formSchema>;

interface TestimoniFormProps {
  initialData: tb_testimoni | null;
}

export const TestimoniForm: React.FC<TestimoniFormProps> = ({
  initialData,
}) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit testimoni" : "Create testimoni";
  const description = initialData ? "Edit a testimoni." : "Add a new testimoni";
  const toastMessage = initialData
    ? "testimoni updated."
    : "testimoni created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<TestimoniFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      path_image: "",
      nama: "",
      message: "",
    },
  });

  const onSubmit = async (data: TestimoniFormValue) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/testimoni`, {
          ...data,
          id_testimoni: initialData.id_testimoni,
        });
      } else {
        await axios.post(`/api/testimoni`, { ...data });
      }
      router.refresh();
      router.push(`/dashboard/testimoni`);
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
      await axios.delete(`/api/testimoni`, {
        data: { id_testimoni: initialData?.id_testimoni },
      });
      router.refresh();
      router.push(`/dashboard/testimoni`);
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
                <FormLabel className="text-black">Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Testimoni</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter testimoni" {...field} />
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
