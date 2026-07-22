import { Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OperationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Operations & Workflows
          </h1>
          <p className="text-xs text-zinc-400">
            System health, background cron schedules, and agent workflow triggers.
          </p>
        </div>
        <Button className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs">
          <Zap className="mr-1.5 h-3.5 w-3.5" />
          Trigger Workflow
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Workflow Engines</span>
          <div className="mt-2 text-2xl font-bold text-white">8 Active</div>
          <p className="mt-1 text-xs text-emerald-400">0 Errors</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">API Response Latency</span>
          <div className="mt-2 text-2xl font-bold text-white font-mono">12 ms</div>
          <p className="mt-1 text-xs text-cyan-400">Local-First Execution</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Automated Crons</span>
          <div className="mt-2 text-2xl font-bold text-white">14 Jobs</div>
          <p className="mt-1 text-xs text-zinc-400">Scheduled 24/7</p>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4">
          <Activity className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-white">Autonomous Workflows</h3>
        <p className="mx-auto mt-2 max-w-md text-xs text-zinc-400">
          Monitor background system execution, API limits, and continuous integration task pipelines.
        </p>
      </div>
    </div>
  );
}
