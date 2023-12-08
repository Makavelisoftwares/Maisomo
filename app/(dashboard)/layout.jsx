import { NavBarDashboard } from "./_components/NavBar";
import { SideBar } from "./_components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="pl-[200px] w-full">
        <div className="px-3 py-2 border-b border-zinc-400/30">
          <NavBarDashboard />
        </div>
        <div className="px-3 mt-3">{children}</div>
      </div>
    </div>
  );
}
