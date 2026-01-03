import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  ArrowLeftRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-background p-4 flex flex-col">
      <nav className="space-y-2">
        <NavLink to="/" end>
          {({ isActive }) => (
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          )}
        </NavLink>

        <NavLink to="/portfolio">
          {({ isActive }) => (
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <Briefcase size={18} />
              Portfolio
            </Button>
          )}
        </NavLink>

        <NavLink to="/trades">
          {({ isActive }) => (
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <ArrowLeftRight size={18} />
              Trades
            </Button>
          )}
        </NavLink>
      </nav>

      {/* Push to bottom */}
      <div className="mt-auto pt-4">
        <ThemeToggle />
      </div>
    </aside>
  );
}
