"use client";

import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import useFetch from "@/utils/useFetch";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const PublishButton = ({ courseId }) => {
  const confetti = useConfettiStore();
  const [isPublished, setisPublished] = useState(false);
  const [issubmitting, setissubmitting] = useState(false);

  const [db_published, setdb_published] = useState(false);

  const router = useRouter();

  console.log("db_published", db_published);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/course/${courseId}`);
        setdb_published(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [courseId,db_published]);

  const handleupdate = async () => {
    try {
      setissubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.put("/api/course", { courseId });

      console.log("response", response.data);

      if (response?.data?.publishment) {
        toast.message(response.data.message);
        setdb_published(false);
      } else {
        setdb_published(true);
        confetti.onOpen();
        toast.message(response.data.message);
      }

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setissubmitting(false);
    }
  };

  return (
    <div>
      {!db_published ? (
        <Button
          disabled={issubmitting}
          onClick={handleupdate}
          className="bg-emerald-500 hover:bg-emerald-500"
        >
          {issubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "publish course"
          )}
        </Button>
      ) : (
        <Button
          disabled={issubmitting}
          onClick={handleupdate}
          className="bg-rose-500 hover:bg-rose-500"
        >
          {issubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "unpublish course"
          )}
        </Button>
      )}
    </div>
  );
};
