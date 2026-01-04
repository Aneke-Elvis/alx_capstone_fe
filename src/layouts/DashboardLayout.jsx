import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-background border-r">
            <Sidebar />
          </div>

          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden p-4 border-b flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </Button>

          <span className="font-semibold">Trading Dashboard</span>
        </div>

        {/* 👇 THIS IS THE KEY FIX */}
        <Outlet />
      </div>
    </div>
  );
}
