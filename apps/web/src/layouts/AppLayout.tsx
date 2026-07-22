import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-950 text-zinc-100 font-sans">
      {/* Executive Sidebar */}
      <Sidebar />

      {/* Main Workspace Frame */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header Bar */}
        <TopBar />

        {/* Dynamic Workspace Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-900/60 p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
