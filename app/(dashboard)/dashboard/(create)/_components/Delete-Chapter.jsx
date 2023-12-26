"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2, Trash } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const ChapterDelete = ({ id }) => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const coursepath = pathname.split("/")[3];
  

  const handleDelete = async () => {
    try {
      setisSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.delete(`/api/chapter/${id}`);

      toast.message(response.data);

      router.push(`/dashboard/new/${coursepath}`);
      
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <Button
      disabled={isSubmitting}
      onClick={handleDelete}
      variant="destructive"
      size="sm"
    >
      {isSubmitting ? <Loader2 className="animate-spin" /> : <Trash />}
    </Button>
  );
};
