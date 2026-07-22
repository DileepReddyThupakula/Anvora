import { NavLink } from "react-router-dom";
import { navigationItems } from "@/app/navigation";
import { currentUser } from "@/app/user";
import { Bot, ChevronRight, Sparkles } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col justify-between border-r border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl px-4 py-5 text-zinc-300 select-none">
      {/* Top Header & Branding */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-3 py-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 shadow-md shadow-cyan-500/20 text-white font-black text-sm">
              A
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wider text-white">
                ANVORA <span className="text-xs font-normal text-cyan-400">OS</span>
              </h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                Executive v1.0
              </p>
            </div>
          </div>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        {/* AI Digital Twin Status Badge */}
        <div className="mx-1 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3 shadow-inner">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-300">
              <Bot className="h-4 w-4 text-cyan-400" />
              <span>Deepu AI Twin</span>
            </div>
            <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
              Active
            </span>
          </div>
          <p className="mt-1.5 text-[11px] text-zinc-400 leading-tight">
            Workforce synced & operational.
          </p>
        </div>

        {/* Navigation Section */}
        <nav className="space-y-1">
          <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
            Workspaces
          </p>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `group relative flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-800/90 text-white shadow-sm border border-zinc-700/50 font-semibold"
                      : "text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 transition-colors duration-200 ${
                          isActive
                            ? "text-cyan-400"
                            : "text-zinc-500 group-hover:text-zinc-300"
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Command Callout */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-2.5 text-xs text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white transition-all">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="font-medium text-zinc-300">Quick Prompt</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        </button>

        {/* User Card */}
        <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-2.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 text-xs font-bold text-white shadow-sm">
              {currentUser.initials}
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-none">
                {currentUser.name}
              </p>
              <p className="mt-1 text-[10px] text-zinc-400 leading-none">
                {currentUser.title}
              </p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
        </div>
      </div>
    </aside>
  );
}
