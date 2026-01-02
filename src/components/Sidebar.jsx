import { NavLink } from "react-router-dom";
import { LayoutDashboard, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";


export default function Sidebar() {
  return (
    <aside className="w-56 border-r bg-background p-4">
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
      </nav>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
}
