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

const formSchema = z.object({
  currentpassword: z.string().min(4, {
    message: " incorrect password",
  }),
  newpassword: z.string().min(8, {
    message: "new password must be at least 8 characters.",
  }),
});

export const ProfilePasswordForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data) {
    try {
      setisSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.put("/api/new-password", {
        newpassword: data.newpassword,
        currentpassword: data.currentpassword,
      });

      console.log(response.data);
      toast.message(response.data);
    } catch (error) {
      console.log(error);
      toast.message(error.response.data);
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
            name="currentpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Fill in your current password you used to register your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Fill in your new password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="bg-sky-500 hover:bg-sky-500 w-full"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "update Password"
          )}
        </Button>
      </form>
    </Form>
  );
};
