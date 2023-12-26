"use client";

import { PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = ({ value }) => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ReactPlayer width={"100%"} playIcon={<PlayCircle className="text-sky-500"/>} controls url={value} />;
};
