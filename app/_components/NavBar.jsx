import { Logo } from "@/components/Logo";
import { UserDropDown } from "@/components/UserDropDown";
import { Button } from "@/components/ui/button";
import { ServerSession } from "@/utils/ServerSession";
import Link from "next/link";

export const NavBar = async () => {
  const { email, name, user, image } = await ServerSession();

  return (
    <div className="flex items-center justify-between md:px-[100px] px-2 py-2 border-b border-zinc-400/30">
      <div>
        <Logo />
      </div>

      {/* Links and logins profile */}
      {user ? (
        <div className="flex items-center space-x-2">
          {/* Button */}
          <div>
            <Button variant="link" asChild>
              <Link href="/role">Dashboard</Link>
            </Button>
          </div>

          <div>
            <UserDropDown  />
          </div>
        </div>
      ) : (
        <div>
          <Button variant="link" asChild>
            <Link href="/auth/sign-up">sign-up</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/auth/sign-in">sign-in</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
