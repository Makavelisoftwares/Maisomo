"use client";

import Link from "next/link";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  role: z.string({
    required_error: "Please select a role to display.",
  }),
});

export const SelectRole = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data) {
    console.log(data);
    try {
      setisSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.put("/api/role", { role: data.role });
      toast.success(response.data);

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[350px] space-y-6"
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select
                disabled={isSubmitting}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified role to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="INSTRUCTOR">INSTRUCTOR</SelectItem>
                  <SelectItem value="STUDENT">STUDENT</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Your role can still be changed later to either
                INSTRUCTOR/STUDENT on accessing your dashboard
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="bg-sky-500 text-white hover:text-white hover:bg-sky-500"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : "ASSIGN ROLE"}
        </Button>
      </form>
    </Form>
  );
};
