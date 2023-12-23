"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/Editor";
import useFetch from "@/utils/useFetch";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z
    .string({ required_error: "Enter a course title" })
    .min(4, { message: "Title should be atleast 4 characters" }),

  category: z.string({ required_error: "Select course category" }),

  description: z
    .string({ required_error: "Enter a course description" })
    .min(120, { message: "Description should be atleast 120 characters" }),
});

export const CourseForm = () => {
  const [issubmitting, setissubmitting] = useState(false);
  const { data: categories } = useFetch("/api/category");
  const router=useRouter()

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data) {
    try {
      setissubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.post("/api/course", {
        category: data?.category,
        title: data?.title,
        description: data?.description,
      });

      console.log(response?.data);

      toast.message(`${response?.data?.title} successfully created`)
      router.push(`/dashboard/new/${response?.data?.id}`)

    } catch (error) {
      console.log(error);
    } finally {
      setissubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>

                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified category to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories?.map((category, index) => (
                      <SelectItem key={index} value={category?.id}>
                        {category?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Course Description</FormLabel>

                <FormControl>
                  <Editor {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          disabled={issubmitting}
          type="submit"
          className="bg-sky-500 hover:bg-sky-500"
        >
          {issubmitting ? (
            <div className="flex items-center space-x-2">
              <span>creating course</span> <Loader2 className="animate-spin" />
            </div>
          ) : (
            "create course"
          )}
        </Button>
      </form>
    </Form>
  );
};
