"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-store";
import { PlusCircle } from "lucide-react";

export const UnitButton = () => {
  const { onOpen } = useModal();

  return (
    <div className="my-2">
      <Button
        onClick={() => onOpen("unitmodal")}
        variant="link"
        className="flex items-center space-x-2 hover:text-sky-500  text-sky-500"
        size="sm"
      >
        <PlusCircle />
        <span>Chapter</span>
      </Button>
    </div>
  );
};
