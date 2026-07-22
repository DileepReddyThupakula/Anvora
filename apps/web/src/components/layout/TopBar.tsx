import { useLocation } from "react-router-dom";
import { navigationItems } from "@/app/navigation";
import {
  Bell,
  Search,
  Zap,
  Sliders,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function TopBar() {
  const location = useLocation();

  const currentItem = navigationItems.find(
    (item) => item.href === location.pathname
  ) || { name: "Dashboard" };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl px-6">
      {/* Active Workspace / Page Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            HQ
          </span>
          <span className="text-zinc-600">/</span>
          <h2 className="text-sm font-bold text-white tracking-wide">
            {currentItem.name}
          </h2>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
          <ShieldCheck className="h-3 w-3" />
          System Optimal
        </span>
      </div>

      {/* Command Bar & Quick Actions */}
      <div className="flex items-center gap-4">
        {/* Search / Command Launcher */}
        <button
          type="button"
          className="flex h-9 w-64 items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 text-xs text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 transition-all shadow-inner"
        >
          <div className="flex items-center gap-2">
            <Search className="h-3.5 w-3.5 text-zinc-500" />
            <span>Search or command...</span>
          </div>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
            <span className="text-[10px]">⌘</span>K
          </kbd>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Deepu AI Quick Assistant */}
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-sm shadow-cyan-500/10"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="hidden md:inline">Ask Deepu AI</span>
          </button>

          {/* Quick Stats / Latency indicator */}
          <div className="hidden lg:flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px] text-zinc-300">12ms</span>
          </div>

          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 transition-all"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-cyan-400" />
          </button>

          {/* Quick Settings Icon */}
          <button
            type="button"
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 transition-all"
            aria-label="Quick Settings"
          >
            <Sliders className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
