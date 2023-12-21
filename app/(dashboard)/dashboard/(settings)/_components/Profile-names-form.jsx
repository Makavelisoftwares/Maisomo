"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { toast } from "sonner";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullnames: z.string().min(2, {
    message: "fullname must be at least 4 characters.",
  }),
  useremail: z.string().email(),
});

export const ProfileNamesForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data) {
    try {
      setisSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.put("/api/profile-update", {
        useremail: data.useremail,
        fullnames: data.fullnames,
      });

      toast.message(response.data);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <FormField
            control={form.control}
            name="fullnames"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full names</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="useremail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isSubmitting} className="bg-sky-500 hover:bg-sky-500 w-full" type="submit">
          {isSubmitting ? <Loader2 className="animate-spin" /> : "save changes"}
        </Button>
      </form>
    </Form>
  );
};
