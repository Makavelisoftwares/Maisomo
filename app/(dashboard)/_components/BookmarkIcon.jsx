"use client";

import { cn } from "@/lib/utils";
import axios from "axios";
import { BookmarkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const BookMarkIcon = ({ userId, courseId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/course/enrol`);
        const enrollments = response?.data?.filter(
          (enrollment) => enrollment.courseId === courseId
        );

        for (let enrols of enrollments) {
          if (enrols.courseId == courseId) {
            setIsBookmarked(true);
          } else {
            setIsBookmarked(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [ courseId]);

  const handleBookMark = async () => {
    try {
      const response = await axios.post(`/api/course/enrol`, {
        userId,
        courseId,
      });

      if (response.data.enrolled) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }

      toast.message(response.data.message);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BookmarkIcon
        onClick={handleBookMark}
        className={cn(
          "w-[30px] h-[30px] cursor-pointer  rounded-none",
          isBookmarked ? "text-blue-500" : "text-zinc-400"
        )}
      />
    </div>
  );
};
