import { ModeToggle } from "@/components/ModeToggle";
import { UserDropDown } from "@/components/UserDropDown";

export const NavBarDashboard = () => {
  return (
    <div className="flex items-center dark:bg-[#121212] justify-between">
      <div className="flex justify-end w-full items-center space-x-6">
        <div>
          <ModeToggle />
        </div>
        <div>
          <UserDropDown />
        </div>
      </div>
    </div>
  );
};
