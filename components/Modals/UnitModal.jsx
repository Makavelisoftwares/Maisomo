"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useModal } from "@/hooks/use-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "../Editor";
import { ScrollArea } from "../ui/scroll-area";
import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { Loader2, VideoIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(4, {
    message: "Chapter title must be at least 4 characters.",
  }),
  content: z.string().min(120, {
    message: "Chapter content must be at least 120 characters.",
  }),
});

export const UnitModal = () => {
  const { type, isOpen, onClose } = useModal();
  const [Video, setVideo] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const param = usePathname().split("/")[3];
  const router = useRouter();

  const handleModlaChange = isOpen && type === "unitmodal";

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data) {
    try {
      setisSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.post("/api/chapter", {
        Video,
        param,
        title: data.title,
        content: data.content,
      });

      toast.message(response.data);
      onClose();

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Dialog open={handleModlaChange} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chapter Creation</DialogTitle>
          <DialogDescription>
            Let's create your chapter before publishing your course
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[50vh] px-3">
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="chapter title"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chapter Content</FormLabel>
                    <FormControl>
                      <Editor disabled={isSubmitting} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {Video ? (
                <div className="flex relative items-center mb-2 rounded-md bg-sky-100 p-2 space-x-4 w-full">
                  <div className="h-[30px] p-1 flex items-center justify-center w-[30px] border border-sky-500 rounded-full">
                    <VideoIcon className="text-sky-500 w-[30px] h-[30px] " />
                  </div>
                  <span className="text-sm hover:underline text-sky-600">
                    <Link target="_blank" href={Video}>
                      {Video}
                    </Link>
                  </span>
                  <div
                    onClick={() => setVideo("")}
                    className="absolute -top-2 bg-rose-500 text-white w-[25px] h-[25px] flex items-center justify-center cursor-pointer rounded-full right-2"
                  >
                    <X />
                  </div>
                </div>
              ) : (
                <UploadDropzone
                  endpoint="chapterVideo"
                  onClientUploadComplete={(res) => {
                    console.log(res[0].url);
                    setVideo(res[0].url);
                  }}
                  onUploadError={(error) => {
                    console.log(error);
                  }}
                />
              )}
            </form>
          </Form>
        </ScrollArea>

        <DialogFooter>
          <Button
            disabled={isSubmitting}
            className="bg-sky-500 hover:bg-sky-500"
            onClick={form.handleSubmit(onSubmit)}
            type="submit"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <span>Saving</span>
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
