"use client";

import axios from "axios";
import { BookmarkIcon, CheckCircle } from "lucide-react";
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
          if (enrols.courseId == courseId && enrols.studentId == userId) {
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
  }, [courseId,userId]);

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
      {isBookmarked ? (
        <CheckCircle
          onClick={handleBookMark}
          className=
            "w-[30px] h-[30px] cursor-pointer text-sky-500 rounded-none"
          
        />
      ) : (
        <BookmarkIcon
          onClick={handleBookMark}
          className=
            "w-[30px] h-[30px] cursor-pointer  rounded-none text-zinc-400"
          
        />
      )}
    </div>
  );
};
