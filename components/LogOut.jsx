"use client";

import { LogOutIcon } from "lucide-react";
import { DropdownMenuItem, DropdownMenuShortcut } from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";

export const LogOut = () => {
  return (
    <DropdownMenuItem
      onClick={()=>signOut({
        callbackUrl: `${window.location.origin}`,
        redirect: true,
      })}
    >
      LogOut
      <DropdownMenuShortcut>
        <LogOutIcon />
      </DropdownMenuShortcut>
    </DropdownMenuItem>
  );
};
