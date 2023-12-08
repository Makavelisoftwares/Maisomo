import { Logo } from "@/components/Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="px-[100px] flex items-center justify-between fixed bottom-0 right-0 left-0 py-3 border-t border-zinc-400/30">
      <div>
        <Logo />
      </div>

      <div className="flex space-x-2 text-xs">
        <Link href="/">Privacy</Link>

        <Link href="/">Policy</Link>
      </div>
    </div>
  );
};
