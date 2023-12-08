import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, User } from "lucide-react";
import { LogOut } from "./LogOut";
import { ServerSession } from "@/utils/ServerSession";

export const UserDropDown = async() => {
  const {name,image,email}=await ServerSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-lg text-white bg-rose-500 hover:text-white hover:bg-rose-500 font-bold uppercase h-[30px] w-[30px] rounded-full"
          size="sm"
          variant="outline"
        >
          {image ? (
            <Avatar>
              <AvatarImage src={image} alt={image} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
          ) : (
            name[0]
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {name}
            <DropdownMenuShortcut>
              <User />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">
              Manage Account
              <DropdownMenuShortcut>
                <Settings />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <LogOut />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
