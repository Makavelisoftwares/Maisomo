import { ModeToggle } from "@/components/ModeToggle";
import { UserDropDown } from "@/components/UserDropDown";

export const NavBarDashboard = () => {
  return (
    <div className="flex items-center justify-between">
      <div>SearchBar</div>
      <div className="flex items-center space-x-6">
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
