import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-1">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <span className="text-neutral-700 dark:text-slate-50 font-semibold text-lg md:block hidden">
          MAiSOMO
        </span>
      </div>
    </Link>
  );
};
