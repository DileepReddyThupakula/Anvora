import { Building2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BusinessPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Business & Ventures
          </h1>
          <p className="text-xs text-zinc-400">
            Digital company operations, revenue streams, and product lines.
          </p>
        </div>
        <Button className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs">
          <Plus className="mr-1.5 h-3.5 w-3.5" />
          Launch New Venture
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Active Ventures</span>
          <div className="mt-2 text-2xl font-bold text-white">4 Entities</div>
          <p className="mt-1 text-xs text-cyan-400">100% Founder Owned</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">Monthly Run Rate</span>
          <div className="mt-2 text-2xl font-bold text-white">$48,200</div>
          <p className="mt-1 text-xs text-emerald-400">+18% MoM Growth</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5">
          <span className="text-xs font-medium text-zinc-400">AI Employees Deployed</span>
          <div className="mt-2 text-2xl font-bold text-white">8 Agents</div>
          <p className="mt-1 text-xs text-zinc-400">Zero Payroll Friction</p>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 mb-4">
          <Building2 className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-white">Digital Headquarters</h3>
        <p className="mx-auto mt-2 max-w-md text-xs text-zinc-400">
          Manage your SaaS, e-commerce, and content ventures with automated AI execution teams.
        </p>
      </div>
    </div>
  );
}
