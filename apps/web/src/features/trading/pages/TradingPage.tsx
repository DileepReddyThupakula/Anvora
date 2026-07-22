import { TrendingUp, ShieldAlert, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TradingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Trading Workspace
          </h1>
          <p className="text-xs text-zinc-400">
            Algorithmic strategies, risk limits, and real-time portfolio management.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl border-zinc-800 text-xs">
            <ShieldAlert className="mr-1.5 h-3.5 w-3.5 text-amber-400" />
            Risk Parameters
          </Button>
          <Button className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs">
            <Play className="mr-1.5 h-3.5 w-3.5" />
            Deploy Strategy
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Total Portfolio Value</span>
          <div className="mt-2 text-2xl font-bold text-white">$142,850.00</div>
          <p className="mt-1 text-xs text-emerald-400">+$5,820 (+4.2%) Today</p>
        </div>

        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Active Algo Bots</span>
          <div className="mt-2 text-2xl font-bold text-white">12 Algos</div>
          <p className="mt-1 text-xs text-cyan-400">100% Signal Uptime</p>
        </div>

        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Sharpe Ratio</span>
          <div className="mt-2 text-2xl font-bold text-white">2.84</div>
          <p className="mt-1 text-xs text-zinc-400">Max Drawdown: -3.1%</p>
        </div>
      </div>

      {/* Placeholder Workspace Area */}
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 mb-4">
          <TrendingUp className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-white">Trading Engine Live</h3>
        <p className="mx-auto mt-2 max-w-md text-xs text-zinc-400">
          Connect exchange API keys in settings to activate high-frequency execution and live charts.
        </p>
      </div>
    </div>
  );
}
